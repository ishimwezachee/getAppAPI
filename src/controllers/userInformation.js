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
    }

}

export default UserInformationControllers;