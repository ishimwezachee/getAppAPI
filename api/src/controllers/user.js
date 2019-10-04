import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import Validation from "../validations/validation";

// require('detenv').config();

class UserController{
    static signup(req,res){
        const {firstName,surName,telephone,email,nationality,category}=req.body;
 
     const validationObject = {firstName,surName,telephone,email,nationality,category};
     const { error } = Validation.SignUpValidation(validationObject);
    if(error){
        res.status(400).json({status:400,error:`issue made ${error}`});
    }else{
     // check if the email exits    :
     const user = UserModel.findUser(email);
     if(user){
         res.status(400).json({status:400,error:"email already exists"})
     }else{// store data with hashed telphoneNumber;
        const saltRounds = 10;
        bcrypt.hash(telephone,saltRounds,(err,hashedTelephone)=>{
            if(err){
                res.status(500).json({status:500,error:"server error"});
            }else{
        const userObject ={firstName,surName,hashedTelephone,email,nationality,category};
        const newUser = UserModel.createUser(userObject);
        // generate jwt
        const token = jwt.sign({userId:newUser.id,email},"RANDOM_TOKEN_SECRET",{ expiresIn:"24"});
         // final response
         res.status(201).json({
             status:201,
             data:{token,id:newUser.id,firstName,surName,hashedTelephone,email,nationality,category}
         });
    

            }
        })
    
         
    
    
    }
 }

}
}




export default UserController;