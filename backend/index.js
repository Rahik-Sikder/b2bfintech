const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware.js")

const app = express();
app.use(cors());


// app.use("/", authMiddleware);

app.get("/helloWorld", (request, response) => {
  return response.send("Hello World");
});

const orderData = require("./order-data.json")

app.get("/pendingData", (request, response) => {
  const pendingData = orderData.orders.filter((order)=> order.status == "pending");
  return response.send(JSON.stringify(pendingData));
});

app.get("/deliveryData", (request, response) => {
  const delieveryData = orderData.orders.filter((order)=> order.status == "delivery");
  return response.send(JSON.stringify(delieveryData));
});

app.get("/recievedData", (request, response) => {
  const recievedData = orderData.orders.filter((order)=> order.status == "recieved");
  return response.send(JSON.stringify(recievedData));
});

app.get("/completedData", (request, response) => {
  const completedData = orderData.orders.filter((order)=> order.status == "completed");
  return response.send(JSON.stringify(completedData));
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));

