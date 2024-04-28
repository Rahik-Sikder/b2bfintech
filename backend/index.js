const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const authMiddleware = require("./auth-middleware.js");
const firebase = require("./firebase/admin");
const functions = require("firebase-functions");


const app = express();
app.use(bodyParser.json());
app.use(cors())

database = firebase.database();

// Used for authentication purposes
// Right now, commented out for demo app 
// app.use("/", authMiddleware); 

// This is for demo purposes only, actual app should use Cloud Firestore or some other
// document database instead of Firebase Realtime Database. Only using here because of
// the ease of setup and limited data usage -> practically this is kinda dumb/wasteful

let orderData = {};
firebase
  .database()
  .ref("/orders")
  .once("value")
  .then((snapshot) => {
    orders = [];
    for (const key in snapshot.val()) {
      orders.unshift(snapshot.val()[key]);
    }
    orderData = { orders: orders };
    console.log(
      "App started running, orderData has length: ",
      orderData.orders.length
    );
  });

orderDataRef = firebase.database().ref("orders");
orderDataRef.on("value", (snapshot) => {
  orders = [];
  for (const key in snapshot.val()) {
    orders.push(snapshot.val()[key]);
  }
  orderData = { orders: orders };
  console.log("DB Updated, orderData has length: ", orderData.orders.length);
});

// This is for the purposes of the demo, to completely reset the data
app.post("/resetAllOrders", (request, response) => {
  console.log("Someone has updated the database completely!");
  const orderData = require("./order-data.json");
  firebase.database().ref("/orders").set({});
  orderData.orders.forEach((order) => {
    firebase
      .database()
      .ref("/orders/order_" + order.id)
      .set(
        {
          id: order.id,
          item_name: order.item_name,
          status: order.status,
          date_ordered: order.date_ordered,
          return_req_date: order.return_req_date,
          refund_amount: order.refund_amount,
          item_description: order.item_description,
          return_reasoning: order.return_reasoning,
        },
        (error) => {
          if (error) {
            return response.status(404).send("Error, something went wrong");
          }
        }
      );
  });

  firebase.database().ref("/item_codes").set(orderData.item_codes);

  return response.send(
    "test sucess,completely reset the entire orders database!"
  );
});

app.post("/submitReturn", (request, response) => {

  console.log("Adding order",request.body);
  order_id = 51180 + orderData.orders.length; // Arbritrary tbh, want to generate seq for demo
  // Get the current date
  const currentDate = new Date();

  // Get the components of the date (month, day, and year)
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Pad single-digit month and day with leading zeros if necessary
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // Format the date in MM/DD/YYYY format
  const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;
  firebase
    .database()
    .ref("/orders/order_" + order_id)
    .set({
      id: order_id,
      item_name: request.body.item_name,
      status: "pending",
      date_ordered: request.body.date_ordered,
      return_req_date: formattedDate,
      refund_amount: request.body.refund_amount,
      item_description: request.body.item_description,
      return_reasoning: request.body.return_reasoning,
    }, (error) => {
      if(error){
        return response.status(404).send("Error, something went wrong");
      } else {
        return response.send("Successfully added order!");
      }
    });
});

app.get("/scanCode", (request, response) => {
  const code = request.query.item_code; // Retrieve item code from query parameters
  console.log("Request made to scan code: ", code);
  firebase.database().ref("/item_codes/" + code).get().then((snapshot)=> {
    if(snapshot.exists()){
      const item = snapshot.val()
      console.log("Item requested: ", item);
      return response.json(JSON.stringify(item)); // Send item details as JSON
    } else {
      console.log("Item not found for code: ", code);
      return response.status(404).send("Item not found"); // Handle case when item code is not found
    }
  }).catch((error)=> {
    console.error(error);
    response.status(404).send("Error finding item code");
  })
});

app.get("/pendingData", (request, response) => {
  const pendingData = orderData.orders.filter(
    (order) => order.status == "pending"
  );
  return response.send(JSON.stringify(pendingData));
});

app.get("/deliveryData", (request, response) => {
  const delieveryData = orderData.orders.filter(
    (order) => order.status == "delivery"
  );
  return response.send(JSON.stringify(delieveryData));
});

app.get("/recievedData", (request, response) => {
  const recievedData = orderData.orders.filter(
    (order) => order.status == "recieved"
  );
  return response.send(JSON.stringify(recievedData));
});

app.get("/completedData", (request, response) => {
  const completedData = orderData.orders.filter(
    (order) => order.status == "completed"
  );
  return response.send(JSON.stringify(completedData));
});


// app.listen(4000, () => console.log("The server is running at PORT 4000"));
exports.app = functions.https.onRequest(app);