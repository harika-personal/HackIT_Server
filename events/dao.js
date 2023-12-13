import model from "./model.js";

export const createEvent = (event) => model.create(event);
export const findAllEvents = () => model.find();
export const findEventById = (eventId) => model.findById(eventId);

import { getJson } from "serpapi";
import * as Dotenv from "dotenv";
Dotenv.config();
const apiKey = process.env.API_KEY;

export const getAllEvents = async () => {
  try {
    //get request to external API
    const response = await getJson({
      engine: "google_events",
      api_key: apiKey,
      q: "tech events",
      location: "Boston",
    });

    return response.events_results;
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
