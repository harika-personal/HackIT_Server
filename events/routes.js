// Import the necessary modules
import * as dao from "./dao.js";
//import { ObjectID } from 'mongodb'; // Import ObjectID for MongoDB

function EventRoutes(app) {
 // console.log("In event routes");
  const createEvent = async (req, res) => {
    const event = await dao.createEvent(req.body);
    res.json(event);
  };

  const findAllEvents = async (req, res) => {
    try {
      const events = await dao.findAllEvents();
      console.log("The events are", events);
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  // Add more event-related routes as needed

  app.post("/api/events", createEvent);
  app.get("/api/events", findAllEvents);
  // Add more event-related routes

}

export default EventRoutes;