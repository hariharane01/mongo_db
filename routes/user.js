
import  express from "express";
import { genPassword, getUserByName } from "../data.js";
import { createuser } from "../data.js";

const router= express.Router();


router.post("/signup", async (req, res) => {  //this is use to signup page 
    const {username, password} = req.body;  //to get username and password for body
    console.log(username, password);
    const issue= await getUserByName(username);   //this is use to find the user is already exist or not 
    if(issue){
        res.status(400).send({message: "username is already taken"}) //if it is exist show this error status and message
        return; //to close the if condition 
    }
    // console.log(issue)
    const hashPass = await genPassword(password) ;  //use to get the hash password from bcrypt 
    const result= await createuser(username,hashPass) //use to create a new collection in database 
    res.send(result);
  });



  export const userRouters= router;
  //Validate if user is already present
  //validate if password matches

  //to store the user detail = user collection - username & password 
