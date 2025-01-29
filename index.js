const express = require("express");
const { createEvent, getAllEvents } = require("./actions/events.actions");

//Load env varibles
require("dotenv").config();
const app = express();

//Parse json in express app
app.use(express.json());

//Post an event
app.post("/events", async (req, res) => {
  try {
    const { name, location, price, description } = req.body;

    if (!name || !location || !price || !description) {
      return res.status(400).json({ message: "Missing inputs" });
    }

    const event = await createEvent(name, location, price, description);
    if (event) {
      res
        .status(201)
        .json({ message: "Event created successfully", event: event });
    }
  } catch (error) {
    console.error("Error creating event:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Get all events
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();

    if (events) {
      res.status(201).json({ data: events });
    }
  } catch (error) {
    console.error("Error fetching events: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server running successfully on http://localhost:5000");
});
