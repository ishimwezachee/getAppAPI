import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import Validation from "../validations/validation";

// require('detenv').config();

class UserController{
    static signup(req,res){
        // fetch the data from the the body reqyest
        const {firstName,surName,telephone,email,nationality,category}=req.body;
        // check on the validation;
     const validationObject = {firstName,surName,telephone,email,nationality,category};
     const { error } = Validation.SignUpValidation(validationObject);
    if(error){
        res.status(400).json({status:400,error:`issue made ${error}`});
    }else{
     // check the user by phoneNumber
     const user = UserModel.findUser(telephone);
     if(user){
         res.status(400).json({status:400,error:"phoneNumber already exists"})
     }else{
         // creating a new user;
         const userObject = {firstName,surName,telephone,email,nationality,category};
         const newUser = UserModel.createUser(userObject);
         // generate tokens 
         const token = jwt.sign({userId:newUser.id,telephone},"RANDOM_TOKEN_SECRET",{expiresIn:"24h"});
         // final response;
         res.status(201).json({status:201,data:{token,id:newUser.id,firstName,surName,telephone,email,nationality,category}});
     }
    
 }

}


static login(req,res)   {
    // fetch telephone from the the body request
  const { telephone } = req.body;
  //check on validation 
  const validationObject = { telephone };
  const { error } = Validation.loginValidation(validationObject);
     if(error){
      res.status(400).json({status:400,error:`bad Input ${error}`});
  }else{    
      // find user from the 
      const user = UserModel.findUser(telephone);
      if(user){
             // create tokens 
          const token = jwt.sign({userId:user.id,telephone},"RANDOM_TOKEN_SECRET",{expiresIn:"24h"});
          // final response 
          res.status(201).json({status:201,data:token});
      }else{
        res.status(404).json({status:404,error:"user is not found "});
      }
    }
}
}






export default UserController;