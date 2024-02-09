// const express = require("express");
// const {MongoClient}= require('mongodb');

import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 7000;

const movies = [
  {
    id: 1,
    name: "LEO",
    summary:
      "The film was officially announced in January 2023 under the tentative title Thalapathy 67, as it is Vijay's 67th film as a lead actor, and the official title was announced a few days later.",
    rating: 9.5,
    poster:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=dmnn5giZ-KzvuqYR",
    language: "English",
  },
  {
    id: 2,
    name: "BEAST",
    summary:
      "After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    rating: 8.6,
    poster:
      "https://igimages.gumlet.io/tamil/home/beast260322_1.jpg?w=900&dpr=1.3 ",
    trailer: " https://youtube.com/embed/0E1kVRRi6lk?si=X9he9E1P9b6nQEbB",
    language: "tamil",
  },
  {
    id: 3,
    name: "VARISU",
    summary:
      "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
    rating: 9.5,
    poster:
      " https://igimages.gumlet.io/tamil/home/varisu241022_2.jpg?w=376&dpr=2.6",
    trailer: " https://youtube.com/embed/9fux9swQ5AQ?si=jKjh1zmpHO2NV5zq",
    language: "Tamil",
  },
  {
    id: 4,
    name: "MASTER",
    summary:
      "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    rating: 9,
    poster:
      " https://pbs.twimg.com/media/EVJgwvdU0AI59iw?format=jpg&name=900x900",
    trailer: " https://youtube.com/embed/UTiXQcrLlv4?si=ksUGVO40VTUGr_dH",
    language: "English",
  },
  {
    id: 5,
    name: "BIGIL",
    summary:
      "Michael gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    rating: 7.5,
    poster:
      "https://static.toiimg.com/thumb/imgsize-23456,msid-71277352,width-600,resizemode-4/71277352.jpg ",
    trailer: " https://youtube.com/embed/GR-Ui8-V2M0?si=2O7nHbVcENxeeESk",
    language: "English",
  },
  {
    id: 5,
    name: "MERSAL",
    summary:
      "A police officer arrests a doctor for crimes targeting medical professionals but later finds the real culprit in a tale of revenge, corruption and magic.",
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2M2ZjUxMDUtNDk4MC00ZDAxLTljZjItZmI4MTU5OTQ0ZTQ4XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UY2000_.jpg ",
    trailer: "https://youtube.com/embed/gQDo5QuZTaw?si=bUHwi-HJ-iQU40In",
    language: "English",
  },
];

const MONGO_URL = "mongodb://localhost:27017";

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected ");
  return client;
}

const client = await createConnection();

app.get("/", (req, res) => {
  res.send("hello guys");
});

//movies
// app.get("/movies", (req, res) => {
//   res.send(movies);
// });


//get language
app.get("/movies", (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language, rating);
  let filteredMovies = movies;
  if (language) {
    filteredMovies = filteredMovies.filter((mo) => mo.language == language);
  }
  if (rating) {
    filteredMovies = filteredMovies.filter((mo) => (mo.rating = rating));
  }
  res.send(filteredMovies);
});

//movies/id
app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const movie = await client
    .db("movies")
    .collection("movies")
    .findOne({ id: 1 });
  //const movie = movies.find((mo) => mo.id == id);

  res.send(movie);
});

//to get port
app.listen(port, () => {
  console.log("server on port", port);
});
