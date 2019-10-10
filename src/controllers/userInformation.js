import Validation from '../validations/validation';
import UserInformationModel from "../models/userInformation";


class UserInformationControllers{
    // create a static method;

    static createUserInformation(req,res){
        // fetch from req.body
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
            socialMedia
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
             data:createdUserInformation
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

}

export default UserInformationControllers;