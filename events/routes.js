// Import the necessary modules
import * as dao from "./dao.js";
//import { ObjectID } from 'mongodb'; // Import ObjectID for MongoDB

function EventRoutes(app) {
  const createEvent = async (req, res) => {
    const event = await eventDao.createEvent(req.body);
    res.json(event);
  };

  const findAllEvents = async (req, res) => {
    const events = await eventDao.findAllEvents();
    res.json(events);
  };

  // Add more event-related routes as needed

  app.post("/api/events", createEvent);
  app.get("/api/events", findAllEvents);
  // Add more event-related routes

}

export default EventRoutes;