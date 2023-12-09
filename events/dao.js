import model from "./model.js";

export const createEvent = (event) => model.create(event);
export const findAllEvents = () => model.find();

