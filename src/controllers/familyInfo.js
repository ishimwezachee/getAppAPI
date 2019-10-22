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
}

export default FamilyInformationControllers;