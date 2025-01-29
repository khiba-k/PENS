const express = require("express");
const { createEvent, getAllEvents } = require("./actions/events.actions");

//Load env varibles
require("dotenv").config();
const app = express();

//Parse json in express app
app.use(express.json());

//Post an event
app.post("/events", async (req, res) => {
  const { name, location, price, description } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({ message: "Missing inputs" });
  }

  const event = await createEvent(name, location, price, description);
  if (event) {
    res.status(201).json({ message: "Event created successfully", event: event });
  }
});

app.listen(5000, () => {
  console.log("Server running successfully on http://localhost:5000");
});

//Get all events
app.get("/events", async (req, res) => {
  const events = await getAllEvents();

  if (events) {
    res.status(201).json({ data: events });
  }
});
