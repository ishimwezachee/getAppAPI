import Validation from "../validations/validation";
import PersonalInformationModel from "../models/personalInfo";


// create a class that holds all the logics

class PersonalInformationControllers{
    //method to create 
    static createPersonalInformation(req,res){
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
            secondaryNumber
        }=req.body;

        // validate the data from req.body;
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
            secondaryNumber
        };

     // logic 
     const { error }=Validation.personalInformationValidation(validationObject);
     if(error){
         res.status(400).json({
             status:400,
             error:`issue with the input ${error}`
         });
     }else{
         // create PersonalInformation 
         const createdPersonalInformation = PersonalInformationModel.createPersonalInformation(validationObject);
         res.status(201).json({
             status:201,
             data:createdPersonalInformation
         }) 
     }
    }
}

export default PersonalInformationControllers;