import { model } from "./model.js"
import { userModel } from "./model.js";
import eventsModel from "../events/model.js";

export const createEvent = (event) => model.create(event);
export const findAllEvents = () => model.find();
export const findUserById = (userId) => userModel.findById(userId);
export const findEventById = async (eventId, userId) => {
  const userEvent = await model.findOne({ eventId, userId });
  return userEvent;
};
export const isUserRegisteredForEvent = async (userId, eventId) => {
  const count = await model.countDocuments({ userId, eventId });
  return count > 0;
};

export const getUserRegistrationStatus = async (userId, eventId) => {
  const userEvent = await model.findOne({ userId, eventId });
  return userEvent ? userEvent.registered : false;
};

export const deRegisterForEvent = async (userId, eventId) => {
  const response = await model.findOneAndUpdate(
    { eventId, userId },
    { $set: { registered: false } },
    { new: true }
  );
  return response.registered;

}

export const registerUserForEvent = async (userId, eventId) => {
  try {
    const isRegistered = await isUserRegisteredForEvent(userId, eventId);

    if (!isRegistered) {
      await model.create({
        userId,
        eventId,
        registered: true,
      });
    }
    else {
      await model.findOneAndUpdate(
        { eventId, userId },
        { $set: { registered: true } },
        { new: true }
      );
    }
    const isRegisteredLater = await isUserRegisteredForEvent(userId, eventId);
    return isRegisteredLater;
  } catch (error) {
    console.error('Error registering user for event:', error);
    throw error;
  }
};

export const getEventsRegisteredByUser = async (userId) => {
  // console.log(userId);
  const eventsRegisteredByUser = await model.find({ userId });
  // Extract eventIds from userEvents
  const eventIds = eventsRegisteredByUser.map((userEvent) => userEvent.eventId);
   // Fetch event details based on eventIds from the "Events" collection
  const eventDetails = await eventsModel.find({ _id: { $in: eventIds } });

   // Combine event details with user events
  const combinedEvents = eventsRegisteredByUser.map((userEvent) => {
    const eventDetail = eventDetails.find((event) => event._id.toString() === userEvent.eventId.toString());
    return {
      ...userEvent.toObject(),
      eventDetail: eventDetail || null,
    };
  });

  // console.log(combinedEvents);
  
  return combinedEvents;
}




