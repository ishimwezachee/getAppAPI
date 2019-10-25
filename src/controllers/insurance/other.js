import Validation from "../../validations/validation";
import OtherInsuranceInformationModel from "../../models/insurance/other"
// class that holds all the logics 
class OtherInsuranceInforamationControllers{
    static createOtherInsuranceInformations(req,res){
     const {
        insuranceCompany,
        holder,
        cardNumber,
        issueDate,
        insuranceExpiracy,
        insuranceCoverage,
        email,
        telephone
     }=req.body;

     const validationObject = {
        insuranceCompany,
        holder,
        cardNumber,
        issueDate,
        insuranceExpiracy,
        insuranceCoverage,
        email,
        telephone
     }

     // check on the validation 

     const {error} = Validation.OtherInsuranceInformationValidation(validationObject);

     if(error){
        res.status(400).json({
            status:400,
            error:"issue with the input "
        });
     }else{
         // display the data;
         const createdOtherInsuranceInformation  = OtherInsuranceInformationModel.createOtherInsuranceInformation(validationObject);
         res.status(201).json({
             status:201,
             data:createdOtherInsuranceInformation
         })
     }
    }
}

export default OtherInsuranceInforamationControllers;