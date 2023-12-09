import * as Dotenv from "dotenv";
import express from 'express';
import cors from "cors";
import ExternalApiRoutes from "./ExternalApi/externalApi_routes.js"
const app = express()


app.use(
    cors({
      credentials: true,
    //   origin: process.env.FRONTEND_URL,
      origin: "http://localhost:3000",
    })
);

app.get('/', (req, res) => {res.send('HackIt server is up and running!')});

app.use(express.json());

ExternalApiRoutes(app);
app.listen(4000);