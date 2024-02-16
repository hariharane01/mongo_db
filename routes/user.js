
import  express from "express";
import { genPassword, getUserByName } from "../data.js";
import { createuser } from "../data.js";

const router= express.Router();


router.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    const issue= await getUserByName(username);
    if(issue){
        res.status(400).send({message: "username is already taken"})
        return;
    }
    // console.log(issue)
    const hashPass = await genPassword(password) ;
    const result= await createuser(username,hashPass)
    res.send(result);
  });



  export const userRouters= router;
  //Validate if user is already present
  //validate if password matches

  //to store the user detail = user collection - username & password 
