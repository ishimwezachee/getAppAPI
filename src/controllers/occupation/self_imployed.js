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

     static viewSpecificSelfEmployeeInformation(req,res){
         const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
         // check if the self_employee information exists 
         const OneSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId);
         if(OneSelfEmployeeInformation){
             res.status(200).json({
                 status:200,
                 data:OneSelfEmployeeInformation
             })
         }else{
             res.status(404).json({
                 status:404,
                 message:"data was not found"
             })
         }
        
     }

     static ViewAllSelfEmployeeInfomation(req,res){
         const  AllSelfEmployeeInformation = SelfEmployeeInformationModel.findAllSelfEmployeeInformation();
         res.status(200).json({
             status:200,
             data:AllSelfEmployeeInformation
         })
     }
}

export default SelfEmployeeInformationControllers;