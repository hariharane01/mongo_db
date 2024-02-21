// const express = require("express");
// const {MongoClient}= require('mongodb');
import "dotenv/config"; // to configure the dotenv
import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import { movieRouter } from "./routes/movie.js";
import { userRouters } from "./routes/user.js";


// console.log(process.env.MONGO_URL);
const app = express();
app.use(cors());
const port = process.env.port;

// const MONGO_URL = "mongodb://localhost:27017";
const MONGO_URL = process.env.MONGO_URL;  //call the env variable

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected ");
  return client;
}

export const client = await createConnection();

app.use(express.json()); //interceptor || converting body to json

app.get("/", (req, res) => {
  res.send("hello guys");
});

app.use("/movie", movieRouter)
app.use("/user", userRouters)

//to get port
app.listen(port, () => {
  console.log("server on port", port); 
});

