import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getMoviesbyId(id) {
  return await client.db("movies").collection("movies").findOne({ id: id });
}
export async function getDatabyLang(req) {
  return await client
    .db("movies")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export async function postData(newMovies) {
  return await client.db("movies").collection("movies").insertMany(newMovies);
}
export async function deleteMoviesById(id) {
  return await client.db("movies").collection("movies").deleteOne({ id: id });
}
export async function EditMovies(id, updateMovies) {
  return await client
    .db("movies")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateMovies });
}

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
  const hashPass = await bcrypt.hash(password, salt);
  console.log(hashPass);
  return hashPass;
}

export async function createuser(username, hashPass) {
  return await client
    .db("movies")
    .collection("user")
    .insertOne({ username: username, password: hashPass });
}

export async function getUserByName(username){
  return await client.db("movies").collection("user").findOne({username:username});
}