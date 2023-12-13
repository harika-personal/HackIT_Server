import * as dao from "./dao.js";

function UserEventRoutes(app) {
  const findAllEvents = async (req, res) => {
    try {
      const events = await dao.findAllEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/userevents/:userId", findUserById);


  const findEventById = async (req, res) => {
    try {
      const event = await dao.findEventById(req.params.eventId);
      res.json(event);
    } catch (error) {
      console.error("Error fetching event details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  app.get("/api/userevents/:eventId", findEventById);

  const createEvent = async (req, res) => {
    try {
      const event = await dao.createEvent(req.body);
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  app.post("/api/userevents", createEvent);

 const registerUserForEvent =  async (req, res) => {
      const { userId, eventId } = req.params;
      const isRegistered = await dao.registerUserForEvent(userId, eventId);
      res.json({ isRegistered });
  };
  app.post("/api/userevents/:userId/:eventId/register", registerUserForEvent);


  const deRegisterForEvent = async (req,res)=>{
    const {userId,eventId} = req.params;
    const isDeregistered = await dao.deRegisterForEvent(userId,eventId);
    res.json({isDeregistered});
  }
  app.put("/api/userevents/:userId/:eventId/deregister", deRegisterForEvent);

  const isUserRegisteredForEventRoute = async (req, res) => {
    try {
      const { userId, eventId } = req.params;
      const isRegistered = await dao.isUserRegisteredForEvent(userId, eventId);
      console.log("is registered?",isRegistered);
      res.json({ isRegistered });
    } catch (error) {
      console.error("Error checking user registration for event:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  app.get("/api/userevents/:userId/:eventId/isregistered", isUserRegisteredForEventRoute);


  const userIsRegistered = async (req,res) =>{
    const {userId,eventId} = req.params;
    const status = await dao.getUserRegistrationStatus(userId,eventId);
    res.json(status);
  }
  app.get("/api/userevents/:userId/:eventId/registerstatus",userIsRegistered );

}

export default UserEventRoutes;
