import * as Dotenv from "dotenv";
import express from 'express';
import {config,  getJson } from "serpapi";
Dotenv.config();
// const apiKey = process.env.API_KEY;

const apiKey = "9d2740883f3be67dd1b6ec3df3432d42713da26fc4bb4dbbed8b7412c7efb385";

config.api_key = apiKey;
config.timeout = 60000;

const app = express()
const response = await getJson({
  engine: "google",
  api_key: apiKey, // Get your API_KEY from https://serpapi.com/manage-api-key
  q: "coffee",
  location: "Austin, Texas",
});
app.get('/', (req, res) => {res.send('HackIt server is up and running!')})
await getJson({ engine: "google", q: "coffee" }); // uses the API key defined in the config
// await getJson({ engine: "google", api_key: API_KEY_2, q: "coffee" }); // API_KEY_2 will be used
console.log(response);
app.listen(4000)