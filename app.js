import express from 'express';
import {config,  getJson } from "serpapi";

config.api_key = API_KEY;
config.timeout = 60000;

const app = express()
const response = await getJson({
  engine: "google",
  api_key: API_KEY, // Get your API_KEY from https://serpapi.com/manage-api-key
  q: "coffee",
  location: "Austin, Texas",
});
app.get('/', (req, res) => {res.send('HackIt server is up and running!')})
await getJson({ engine: "google", q: "coffee" }); // uses the API key defined in the config
await getJson({ engine: "google", api_key: API_KEY_2, q: "coffee" }); // API_KEY_2 will be used
console.log(response);
app.listen(4000)