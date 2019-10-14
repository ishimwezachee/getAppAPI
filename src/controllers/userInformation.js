import Validation from '../validations/validation';
import UserInformationModel from "../models/userInformation";
// import imageUpload from '../middlewares/cloudinary';


class UserInformationControllers{
    // create a static method;
    static createUserInformation(req,res){
        console.log(req.file)
     
        const {
            firstName,
            middleName,
            surName,
            birthDate,
            birthPlace,
            nationality,
            sex,
            nationalId,
            martialStatus,
            country,
            province,
            district,
            sector,
            cell,
            village,
            email,
            jobEmail,
            primaryNumber,
            secondaryNumber,
            father_firstName,
            father_surName,
            mother_firstName,
            mother_surName,
            spouse_firstName,
            spouse_middleName,
            spouse_surName,
            spouseId,
            telephone,
            childrenNumber,
            dependency,
            occuption,
            insuranceType,
            bankInformation,
            assets,
            socialMedia,
        }=req.body;
        
     const validationObject = {
            firstName,
            middleName,
            surName,
            birthDate,
            birthPlace,
            nationality,
            sex,
            nationalId,
            martialStatus,
            country,
            province,
            district,
            sector,
            cell,
            village,
            email,
            jobEmail,
            primaryNumber,
            secondaryNumber,
            father_firstName,
            father_surName,
            mother_firstName,
            mother_surName,
            spouse_firstName,
            spouse_middleName,
            spouse_surName,
            spouseId,
            telephone,
            childrenNumber,
            dependency,
            occuption,
            insuranceType,
            bankInformation,
            assets,
            socialMedia
     };
     
     const { error } = Validation.userInformationValidation(validationObject);
     if(error){
         res.status(400).json({
             status:400,
             error:`issue with the input, error ${error}`
         });
     }else{
         // create a user Information
         const createdUserInformation = UserInformationModel.createUserInformation(validationObject);
         res.status(201).json({
             status:201,
             data:createdUserInformation,
            
         })
     }
    };

    static viewAllUserInformation(req,res){
        const userInfomations = UserInformationModel.findAllUserInformation();
        res.status(200).json({
            status:200,
            data:userInfomations
        });
    }

    static viewSpecificUserInformation(req,res){
     const userInformationId = Number(req.params.userInformationId);
     const validationObject = { userInformationId };
     const { error } = Validation.viewSpecificUserinfoValidation(validationObject)
     if(error){
         res.status(400).json({
             status:400,
             error:`error ${error}`
         });
     }else{
         // check if the user exists
         const userInformation = UserInformationModel.findOneUser(userInformationId);
         if(userInformation){
             res.status(200).json({
                 status:200,
                 data:userInformation
             })
         }else{
             res.status(400).json({
                 status:400,
                 error:"the information does not exist"
             });
         }
     }
    }
    static updateOccupationUserInformation(req,res){
       const { occuption } = req.body;
       const userInformationId = Number(req.params.userInformationId);
       const validationObject = { occuption,userInformationId};
       const { error } = Validation.updateUserInformation(validationObject);

       if(error){
           res.status(400).json({
               status:400,
               error:`error ${error}`
           })
       }else{
           // check if the article exists;
           const occuptionData = UserInformationModel.findOneUser(userInformationId);
           if(occuptionData){
               const updatedOccuptionInfo = UserInformationModel.updateUserInformation(userInformationId,occuption);
               res.status(200).json({
                   status:200,
                   data:updatedOccuptionInfo
               })
           }else{
               res.status(404).json({
                   status:404,
                   error:"data not found"
               })
           }
       }

    }

    static deleteUserAllInformation(req,res){
        const userInformationId = Number(req.params.userInformationId);
        // check if the the information exists
        const AllUserInformation = UserInformationModel.findOneUser(userInformationId);
        if(AllUserInformation){
         const deletedUserInfo = UserInformationModel.deleteUserinformation(userInformationId);
         res.status(204).json({
             status:204,
             data:deletedUserInfo 
         })
        }
    }

}

export default UserInformationControllers;