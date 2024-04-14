const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware.js")

const app = express();
app.use(cors());


app.use("/", authMiddleware);

app.get("/helloWorld", (request, response) => {
  return response.send("Hello World");
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));

