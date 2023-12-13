import {model} from "./model.js"
import { userModel } from "./model.js";

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

  export const deRegisterForEvent = async(userId,eventId)=>{
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
      else{
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
  
  


