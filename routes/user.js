import express from "express";
import { genPassword, getUserByName } from "../data.js";
import { createuser } from "../data.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  //this is use to signup page
  const { username, password } = req.body; //to get username and password for body
  //   console.log(username, password);
  const issue = await getUserByName(username); //this is use to find the user is already exist or not
  if (issue) {
    res.status(400).send({ message: "username is already taken" }); //if it is exist show this error status and message
    return; //to close the if condition
  }
  if (
    !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/g.test(
      password
    ) //to check the password pattern is valid or not
  ) {
    res.status(400).send({ message: "password is invalid" });
    return;
  }
  // console.log(issue)
  const hashPass = await genPassword(password); //use to get the hash password from bcrypt
  const result = await createuser(username, hashPass); //use to create a new collection in database
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const userFromDb = await getUserByName(username);
  if (!userFromDb) {
    res.status(400).send({ message: "invalid crendential" });
    return;
  }
  const storedDbPassword = userFromDb.password;
  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
  if (!isPasswordMatch) {
    res.status(400).send({ message: "invalid credential" });
    return;
  }

  const token = jwt.sign({ id: userFromDb._id }, process.env.SECRET_KEY);
  res.send({ message: "successful login", token: token });
});

export const userRouters = router;
//Validate if user is already present
//validate if password matches

//to store the user detail = user collection - username & password
