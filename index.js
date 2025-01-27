const express = require("express");
const createEvent = require("./actions/events.actions");
const morgan = require("morgan");

//Load env varibles
require("dotenv").config();
const app = express();

//Parse json in express app
app.use(express.json());

// Use morgan to log all requests
app.use(morgan("tiny"));

//Post an event
app.post("/events", async (req, res) => {
  const { name, location, price, description } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({ message: "Missing inputs" });
  }

  const event = await createEvent(name, location, price, description);
  if (event.success) {
    res.status(201).json({ message: "Event created successfully" });
  }
});

app.listen(5000, () => {
  console.log("Server running successfully on http://localhost:5000");
});
