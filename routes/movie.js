import {
  getDatabyLang,
  getMoviesbyId,
  postData,
  deleteMoviesById,
  EditMovies,
} from "../data.js";
import { auth } from "../middleware/auth.js";
import express from "express";
const router = express.Router();
//get language

router.get("/", auth,async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const movies = await getDatabyLang(req);
  console.log(movies);

  res.send(movies);
});

//get  movies by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await getMoviesbyId(id);
  console.log(movie);
  movie
    ? res.send(movie)
    : res.status(404).send({ message: "no movie is found" });
});

//Posting  data
router.post("/", async (req, res) => {
  const newMovies = req.body;
  const result = await postData(newMovies);
  res.send(result);
});

// delete by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await deleteMoviesById(id);

  res.send(movie);
});

//Update  data
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateMovies = req.body;
  const result = await EditMovies(id, updateMovies);
  res.send(result);
});

export const movieRouter = router;
