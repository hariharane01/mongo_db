// const express = require("express");
// const {MongoClient}= require('mongodb');

import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 7000;

const MONGO_URL = "mongodb://localhost:27017";

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected ");
  return client;
}

const client = await createConnection();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello guys");
});

//get language
app.get("/movies", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const movies = await client
    .db("movies")
    .collection("movies")
    .find(req.query)
    .toArray();
  console.log(movies);

  res.send(movies);
});

//movies/id
app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await client
    .db("movies")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  movie
    ? res.send(movie)
    : res.status(404).send({ message: "no movie is found" });
});

//Posting  data
app.post("/movies", async (req, res) => {
  const newMovies = req.body;
  const result = await client
    .db("movies")
    .collection("movies")
    .insertMany(newMovies);
  res.send(result);
});

//delete by id
// app.delete("/movies/:id", async (req, res) => {
//   const { id } = req.params;
//   const movie = await client
//     .db("movies")
//     .collection("movies")
//     .deleteOne({ id: id });

//   res.send(movie);
// });

//to get port
app.listen(port, () => {
  console.log("server on port", port);
});
