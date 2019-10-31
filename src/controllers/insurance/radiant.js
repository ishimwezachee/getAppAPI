import Validation from "../../validations/validation";
import RadiantInformationModel from "../../models/insurance/radiant";

// class that holds the whole logics

class RadiantInformationController{
    static createRadiantInformation(req,res){
        const {
            holder,
            cardNumber,
            issueDate,
            insuranceExpiracy,
            insuranceCoverage
 
        }= req.body;

        const validationObject = {
            holder,
            cardNumber,
            issueDate,
            insuranceExpiracy,
            insuranceCoverage
        }
        // check on the error 

        const { error } =Validation.radiantInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            });
        }else{
            //display a new radiant information ;
            const createdRadiantInformation = RadiantInformationModel.createRadiantInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdRadiantInformation
            })
        }
    }

  // view specific radiant information 
  static viewSpecificRadiantInformation(req,res){
      const radiantInfoId = Number(req.params.radiantInfoId);
      const OneSpecificInfo = RadiantInformationModel.findOne(radiantInfoId);
      if(OneSpecificInfo){
          res.status(200).json({
              status:200,
              data:OneSpecificInfo
          })
      }else{
          res.status(404).json({
              status:200,
              message:"data was not found"
          })
      }
  }

  // view all radiant information ;
  static viewAllRadiantInformation(req,res){
      const allRadiantInformation = RadiantInformationModel.findAllRadiantInformation();
      res.status(200).json({
          status:200,
          data:allRadiantInformation
      })
  }

  //update radiant cardNumber information ;
  static updateRadiantCardNumberInformation(req,res){
    const { cardNumber } = req.body;
    const radiantInfoId = Number(req.params.radiantInfoId);
    const validationObject = {radiantInfoId , cardNumber};

    // check for the error 
    const { error }= Validation.UpdateRadiantCardNumberInformationValidation(validationObject);
    if(error){
     res.status(400).json({
         status:400,
         error:"issue with the input"
     })
    }else{
        const fullRadiantInformation = RadiantInformationModel.findOne(radiantInfoId);
        if(fullRadiantInformation){
            const UpdatedRadiantInfoCardNumber = RadiantInformationModel.updateRadiantInformationCardNumber(radiantInfoId , cardNumber);
            res.status(200).json({
                status:200,
                data:UpdatedRadiantInfoCardNumber
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
  //update radiant IssueDate information ;
  static updateRadiantIssueDateInformation(req,res){
    const { issueDate} = req.body;
    const radiantInfoId = Number(req.params.radiantInfoId);
    const validationObject = {radiantInfoId , issueDate};

    // check for the error 
    const { error }= Validation.UpdateRadiantIssueDateInformationValidation(validationObject);
    if(error){
     res.status(400).json({
         status:400,
         error:"issue with the input"
     })
    }else{
        const fullRadiantInformation = RadiantInformationModel.findOne(radiantInfoId);
        if(fullRadiantInformation){
            const UpdatedRadiantInfoIssueDate = RadiantInformationModel.updateRadiantInformationIssueDate(radiantInfoId , issueDate);
            res.status(200).json({
                status:200,
                data:UpdatedRadiantInfoIssueDate
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
  //update radiant InsuranceExpiracy information ;
  static updateRadiantInsuranceExpiracyInformation(req,res){
    const { insuranceExpiracy } = req.body;
    const radiantInfoId = Number(req.params.radiantInfoId);
    const validationObject = {radiantInfoId , insuranceExpiracy};

    // check for the error 
    const { error }= Validation.UpdateRadiantInsuranceExpiracyInformationValidation(validationObject);
    if(error){
     res.status(400).json({
         status:400,
         error:"issue with the input"
     })
    }else{
        const fullRadiantInformation = RadiantInformationModel.findOne(radiantInfoId);
        if(fullRadiantInformation){
            const UpdatedRadiantInfoInsuranceExpiracy = RadiantInformationModel.updateRadiantInformationInsuranceExpiracy(radiantInfoId , insuranceExpiracy);
            res.status(200).json({
                status:200,
                data:UpdatedRadiantInfoInsuranceExpiracy
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
  //update radiant InsuranceCoverage information ;
  static updateRadiantInsuranceCoverageInformation(req,res){
    const {insuranceCoverage } = req.body;
    const radiantInfoId = Number(req.params.radiantInfoId);
    const validationObject = {radiantInfoId , insuranceCoverage};

    // check for the error 
    const { error }= Validation.UpdatRadiantInsuranceCoverageInformationValidation(validationObject);
    if(error){
     res.status(400).json({
         status:400,
         error:"issue with the input"
     })
    }else{
        const fullRadiantInformation = RadiantInformationModel.findOne(radiantInfoId);
        if(fullRadiantInformation){
            const UpdatedRadiantInfoInsuranceCoverage= RadiantInformationModel.updateRadiantInformationInsuranceCoverage(radiantInfoId ,insuranceCoverage);
            res.status(200).json({
                status:200,
                data:UpdatedRadiantInfoInsuranceCoverage
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
}

export default RadiantInformationController