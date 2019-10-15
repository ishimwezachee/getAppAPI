import Validation from "../../validations/validation";
import OtherInformationModel from "../../models/occupation/other";

// a class that holds all the logic

class OtherInformationControllers{
    static createOtherInfomation(req,res){
        const {
            businessType,
            businessName,
            description,
            country,
            province,
            district,
            street
        } =req.body;

        const validationObject = {
            businessType,
            businessName,
            description,
            country,
            province,
            district,
            street
        }

    // check for the error ;
    const {error }  = Validation.OtherInformationValidation(validationObject);
    if(error){
        res.status(400).json({
            status:400,
            error:`issue withe the input ${error}`
        })
    }else{
        // display a created otherInformation 
        const createdOtherInformation = OtherInformationModel.createOtherInformation(validationObject);
        res.status(400).json({
            status:400,
            data:createdOtherInformation
        })
    }
    }
}

export default OtherInformationControllers;