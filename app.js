import * as Dotenv from "dotenv";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import EventRoutes from "./events/routes.js";
import ExternalApiRoutes from "./ExternalApi/externalApi_routes.js"
import cors from "cors";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING, {dbName: 'HackIt'});
const app = express()

app.use(cors({
  credentials:true,
  origin:"http://localhost:3000"
}));

app.use(express.json());
app.get('/', (req, res) => {res.send('HackIt server is up and running!')})


UserRoutes(app);
EventRoutes(app);
ExternalApiRoutes(app);
app.listen(4000)

