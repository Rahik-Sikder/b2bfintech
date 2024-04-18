const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware.js")

const app = express();
app.use(cors());


// app.use("/", authMiddleware);

app.get("/helloWorld", (request, response) => {
  return response.send("Hello World");
});

const pendingData = {
  pendingOrders: [
    {
      id: 10,
      name: "hello",
      dateOfReturn: "20303020",
      refundAmount: 200,
    },

  ]
}

app.get("/pendingData", (request, response) => {
  return response.send(pendingData);
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));

