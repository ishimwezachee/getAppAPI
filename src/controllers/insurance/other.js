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

    // view specific other insurance information;
   static viewSpecificOtherInsuranceInfo(req,res){
       const otherInfoId = Number(req.params.otherInfoId);
       const OneOtherInsuranceInfo = OtherInsuranceInformationModel.findOne(otherInfoId);
       if(OneOtherInsuranceInfo){
           res.status(200).json({
               status:200,
               data:OneOtherInsuranceInfo
           })
       }else{
           res.status(404).json({
               status:404,
               message:"data was not found"
           })
       }
   }

   // view all other insurance information 
   static viewAllOtherInsuranceInformation(req,res){
       const allOtherInsuranceInformation = OtherInsuranceInformationModel.findAllOtherInsuranceInformation();
       res.status(200).json({
           status:200,
           data:allOtherInsuranceInformation
       })
   }

   // delete other insurance information 
   static deleteOtherInsuranceInfo(req,res){
       const otherInfoId = Number(req.params.otherInfoId);
       // check if the info exists;
       const fullInfo = OtherInsuranceInformationModel.findOne(otherInfoId);
       if(fullInfo){
           // delete the info;
           const deletedOtherInsuranceInformation = OtherInsuranceInformationModel.deleteOtherInsuranceInformation(fullInfo);
           res.status(200).json(deletedOtherInsuranceInformation)
       }
   }
}

export default OtherInsuranceInforamationControllers;