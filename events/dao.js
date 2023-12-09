import model from "./model.js"

export const createEvent = (event) => model.create(event);
export const findAllEvents = () => model.find();
// export const findEventById = (eventId) => model.findById(eventId);
export const findEventById = (eventId) => model.findById(eventId);



