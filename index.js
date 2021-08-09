const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json()); // Allows to use JSON from the body that gets passed in requests

const port = process.env.PORT || 8080;
const messageService = require("./services/message");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

const routesController = require("./routes/v1")();
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: messageService.getUserMessage("GET"),
  });
});

app.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: messageService.getUserMessage("POST"),
  });
});

app.listen(port, () => {
  console.log("Server has started and it is listening on Port:", port);
});

app.use("/api/v1", routesController);
