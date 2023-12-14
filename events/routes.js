// Import the necessary modules
import * as dao from "./dao.js";

function EventRoutes(app) {
  const findAllEvents = async (req, res) => {
    try {
      const events = await dao.findAllEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findEventById = async (req, res) => {
    try {
      const event = await dao.findEventById(req.params.eventId);
      // console.log("The events are", event);
      res.json(event);
    } catch (error) {
      console.error("Error fetching event details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const createEvent = async (req, res) => {
    try {
      const event = await dao.createEvent(req.body);
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const getExternalEvents = async (request, response) => {
    try {
      const externalEventsDetails = await dao.getAllEvents();
      console.log("externalEventsDetails",externalEventsDetails);
      response.json(externalEventsDetails);
    } catch (error) {
      console.log("error",error);
      res.status(500).send("Internal Server Error");
    }
  };
  app.get("/api/getEvents", getExternalEvents);

  app.post("/api/events", createEvent);
  app.get("/api/events/:eventId", findEventById);
  app.post("/api/events", createEvent);
  app.get("/api/events", findAllEvents);
}

export default EventRoutes;
