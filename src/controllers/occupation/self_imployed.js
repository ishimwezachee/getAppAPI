import Validation from "../../validations/validation";
import SelfEmployeeInformationModel from "../../models/occupation/self_imployed";


// create a class that holds all the logics s

class SelfEmployeeInformationControllers {
    // method to create ;
     static createSelfEmployeeInformation(req,res){
         const {
            businessType,
            businessName,
            tinNumber,
            country,
            province,
            district,
            street
         } = req.body;

         const validationObject = {
            businessType,
            businessName,
            tinNumber,
            country,
            province,
            district,
            street
         }

         // check out for the error 

         const { error } = Validation.self_employeeInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue with the input ${ error }`,
                
            })
        }else{
            // display a created  selfEmployeedInformation
            const createdSelfEmployedInformation = SelfEmployeeInformationModel.createSelfEmployeeInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdSelfEmployedInformation,
            });
        }
     }
};

export default SelfEmployeeInformationControllers;