import Validation from "../../validations/validation";
import RamaInformationModel from "../../models/insurance/rama";

// class that holds the whole logics 

class RamaInformationControllers{
    static createRamaInformation(req,res){
        const {
            holder,
            cardNumber,
            issueDate,
            insuranceExpiracy,
            insuranceCoverage
        }=req.body

        const validationObject = {
            holder,
            cardNumber,
            issueDate,
            insuranceExpiracy,
            insuranceCoverage
        }

        // check validation 
        const { error } = Validation.ramaInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:"error with the input"
            })
        }else{
            // create the create rama information 

            const createdRamaInformation  = RamaInformationModel.createRamaInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdRamaInformation
            })
        }
    }

    // view specific rama information ;
    static viewSpecificRamaInformation(req,res){
        const ramaInfoId = Number(req.params.ramaInfoId);
        const OneRamaInfo = RamaInformationModel.findOne(ramaInfoId);
        if(OneRamaInfo){
            res.status(200).json({
                status:200,
                data:OneRamaInfo
            })
        }else{
        res.status(404).json({
            status:404,
            message:"data was not found"
        })
        }
    }
    // view all rama insurance information
    static viewAllRamaInformation(req,res){
        const ramaInformation = RamaInformationModel.findAllRamaInformation();
        res.status(200).json({
            status:200,
            data:ramaInformation
        })
    }
    // update rama cardNumber information ;
    static updateRamaCardNumberInformation(req,res){
        const { cardNumber } = req.body;
        const ramaInfoId = Number(req.params.ramaInfoId);
        const validationObject = { ramaInfoId,cardNumber};
        // check error;
        const { error } = Validation.UpdateRamaCardNumberInformationValidation(validationObject);
        if( error ){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            })
        }else{
            const fullRamaInformation = RamaInformationModel.findOne(ramaInfoId);
            if(fullRamaInformation){
                const updatedRamaInfoCardNumber = RamaInformationModel.updateRamaInformationCardNumber(ramaInfoId,cardNumber);
                res.status(200).json({
                    status:200,
                    data:updatedRamaInfoCardNumber
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
      // update rama issueDate information ;
      static updateRamaCardNumberInformation(req,res){
        const { cardNumber } = req.body;
        const ramaInfoId = Number(req.params.ramaInfoId);
        const validationObject = { ramaInfoId,cardNumber};
        // check error;
        const { error } = Validation.UpdateRamaCardNumberInformationValidation(validationObject);
        if( error ){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            })
        }else{
            const fullRamaInformation = RamaInformationModel.findOne(ramaInfoId);
            if(fullRamaInformation){
                const updatedRamaInfoCardNumber = RamaInformationModel.updateRamaInformationCardNumber(ramaInfoId,cardNumber);
                res.status(200).json({
                    status:200,
                    data:updatedRamaInfoCardNumber
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update rama issueDate information ;
    static updateRamaIssueDateInformation(req,res){
        const { issueDate } = req.body;
        const ramaInfoId = Number(req.params.ramaInfoId);
        const validationObject = { ramaInfoId,issueDate};
        // check error;
        const { error } = Validation.UpdateRamaIssueDateInformationValidation(validationObject);
        if( error ){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            })
        }else{
            const fullRamaInformation = RamaInformationModel.findOne(ramaInfoId);
            if(fullRamaInformation){
                const updatedRamaInfoIssueDate = RamaInformationModel.updateRamaInformationIssueDate(ramaInfoId,issueDate);
                res.status(200).json({
                    status:200,
                    data:updatedRamaInfoIssueDate
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
      // update rama insuranceExpiracy information ;
      static updateRamaInsuranceExpiracyInformation(req,res){
        const { insuranceExpiracy } = req.body;
        const ramaInfoId = Number(req.params.ramaInfoId);
        const validationObject = { ramaInfoId,insuranceExpiracy};
        // check error;
        const { error } = Validation.UpdateRamaInsuranceExpiracyInformationValidation(validationObject);
        if( error ){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            })
        }else{
            const fullRamaInformation = RamaInformationModel.findOne(ramaInfoId);
            if(fullRamaInformation){
                const updatedRamaInfoInsuranceExpiracy = RamaInformationModel.updateRamaInformationInsuranceExpiracy(ramaInfoId,insuranceExpiracy);
                res.status(200).json({
                    status:200,
                    data:updatedRamaInfoInsuranceExpiracy
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
      // update rama insuranceCoverage information ;
      static updateRamaInsuranceCoverageInformation(req,res){
        const { insuranceCoverage } = req.body;
        const ramaInfoId = Number(req.params.ramaInfoId);
        const validationObject = { ramaInfoId,insuranceCoverage};
        // check error;
        const { error } = Validation.UpdateRamaInsuranceCoverageInformationValidation(validationObject);
        if( error ){
            res.status(400).json({
                status:400,
                error:"issue with the input"
            })
        }else{
            const fullRamaInformation = RamaInformationModel.findOne(ramaInfoId);
            if(fullRamaInformation){
                const updatedRamaInfoInsuranceCoverage = RamaInformationModel.updateRamaInformationInsuranceCoverage(ramaInfoId,insuranceCoverage);
                res.status(200).json({
                    status:200,
                    data:updatedRamaInfoInsuranceCoverage
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
     // delete the rama information;
     static deleteRamaInformation(req,res){
         const ramaInfoId = Number(req.params.ramaInfoId);
         // check if the data exist ;
         const fullInfo = RamaInformationModel.findOne(ramaInfoId);
         if(fullInfo){
             // delete the info;
             const deleteRamaInfo = RamaInformationModel.deleteRamaInformation(fullInfo);
             res.status(200).json(deleteRamaInfo)
         }
     }
}


export default RamaInformationControllers;