// Import the necessary modules
import * as dao from "./dao.js";
//import { ObjectID } from 'mongodb'; // Import ObjectID for MongoDB

function EventRoutes(app) {
  // console.log("In event routes");
  const findAllEvents = async (req, res) => {
    try {
      const events = await dao.findAllEvents();
      // console.log("The events are", events);
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findEventById = async (req, res) => {
    try {
      const event = await dao.findEventById(req.params.eventId);
      console.log("The events are", event);
      res.json(event);
    } catch (error) {
      console.error("Error fetching event details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const createEvent = async (req, res) => {
    try {
      // Create the event and send it as a JSON response
      const event = await dao.createEvent(req.body);
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  // ... (previous code)

  app.post("/api/events", createEvent);

  // Add more event-related routes as needed
  app.get("/api/events/:eventId", findEventById);
  app.post("/api/events", createEvent);
  app.get("/api/events", findAllEvents);
  // Add more event-related routes
}

export default EventRoutes;
