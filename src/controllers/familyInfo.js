import Validation from "../validations/validation"
import FamilyInformationModel from "../models/familyInfo";


// create the class that hold all the logics

class FamilyInformationControllers{
    // method to create;
    static createFamilyInformation(req,res){
        const{
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
            dependency
        }= req.body;

        const validationObject = {
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
            dependency
        };

        const { error } = Validation.familyInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue with the input ${error}`
            });
        }else{
            // create the family information
            const createdFamilyInformation = FamilyInformationModel.createFamilyInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdFamilyInformation
            });
        }
    }

   // view specific family information 

   static viewSpecificFamilyInformation(req,res){
       const familyInfoId = Number(req.params.familyInfoId);
       // check if the family information exists;
       const OneFamilyInformation = FamilyInformationModel.findOne(familyInfoId);
       if(OneFamilyInformation){
           res.status(200).json({
               status:200,
               data:OneFamilyInformation
           });
       }else{
           res.status(404).json({
               status:404,
               message:"data was not found "
           })
       }
   };
   // view all family information 
   static ViewAllFamilyInformation(req,res){
       // fetch all the family information 
       const familyInformations = FamilyInformationModel.findAllFamilyInformations();
       res.status(200).json({
           status:200,
           data:familyInformations
       })
   }
}

export default FamilyInformationControllers;