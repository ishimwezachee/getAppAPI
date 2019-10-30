import Validation from '../../validations/validation';
import MituelInformationModel from "../../models/insurance/mituel";


// class that holds the whole logics

class MituelInformationControllers {
    static createMituelInformation(req,res){
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
        const { error } = Validation.MituelInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue wit the input {error}`
            })
        }else{
            // despalay a new mituel information ;
            const createdMituelInformation = MituelInformationModel.createMituelInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdMituelInformation
            });
        }
    }

    // view spicific mituel information 
    static viewSpecificMituelInformation(req,res){
        const mituelInfoId = Number(req.params.mituelInfoId);
        const OneMituelInfo = MituelInformationModel.findOne(mituelInfoId);
        if(OneMituelInfo){
            res.status(200).json({
                status:200,
                data:OneMituelInfo
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found "
            });
        }
    }

    // vew all mituel information 

    static viewAllMituelInformation(req,res){
        const allMituelInformation = MituelInformationModel.findAllMituelInformation();
        res.status(200).json({
            status:200,
            data:allMituelInformation
        })
    }

    // update mituel cardNumber information
    static updateMituelCardNumberInformation(req,res){
        const { cardNumber } = req.body;
        const mituelInfoId = Number(req.params.mituelInfoId);
        const validationObject = {mituelInfoId , cardNumber};

        // check for the error 
        const { error }= Validation.UpdateMituelCardNumberInformationValidation(validationObject);
        if(error){
         res.status(400).json({
             status:400,
             error:"issue with the input"
         })
        }else{
            const fullMituelInformation = MituelInformationModel.findOne(mituelInfoId);
            if(fullMituelInformation){
                const UpdatedMituelInfoCardNumber = MituelInformationModel.updateMituelInformationCardNumber(mituelInfoId , cardNumber);
                res.status(200).json({
                    status:200,
                    data:UpdatedMituelInfoCardNumber
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update mituel issueDate information
    static updateMituelIssueDateInformation(req,res){
        const { issueDate } = req.body;
        const mituelInfoId = Number(req.params.mituelInfoId);
        const validationObject = {mituelInfoId , issueDate};

        // check for the error 
        const { error }= Validation.UpdateMituelIssueDateInformationValidation(validationObject);
        if(error){
         res.status(400).json({
             status:400,
             error:"issue with the input"
         })
        }else{
            const fullMituelInformation = MituelInformationModel.findOne(mituelInfoId);
            if(fullMituelInformation){
                const UpdatedMituelInfoIssueDate = MituelInformationModel.updateMituelInformationIssueDate(mituelInfoId , issueDate);
                res.status(200).json({
                    status:200,
                    data:UpdatedMituelInfoIssueDate
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update mituel insuranceExpiracy information
    static updateMituelInsuranceExpiracyInformation(req,res){
        const { insuranceExpiracy } = req.body;
        const mituelInfoId = Number(req.params.mituelInfoId);
        const validationObject = {mituelInfoId , insuranceExpiracy};

        // check for the error 
        const { error }= Validation.UpdateMituelInsuranceExpiracyInformationValidation(validationObject);
        if(error){
         res.status(400).json({
             status:400,
             error:"issue with the input"
         })
        }else{
            const fullMituelInformation = MituelInformationModel.findOne(mituelInfoId);
            if(fullMituelInformation){
                const UpdatedMituelInfoInsuranceExpiracy = MituelInformationModel.updateMituelInformationInsuranceExpiracy(mituelInfoId , insuranceExpiracy);
                res.status(200).json({
                    status:200,
                    data:UpdatedMituelInfoInsuranceExpiracy
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update mituel InsuranceCoverage information
    static updateMituelInsuranceCoverageInformation(req,res){
        const { insuranceCoverage } = req.body;
        const mituelInfoId = Number(req.params.mituelInfoId);
        const validationObject = {mituelInfoId , insuranceCoverage};

        // check for the error 
        const { error }= Validation.UpdateMituelInsuranceCoverageInformationValidation(validationObject);
        if(error){
         res.status(400).json({
             status:400,
             error:"issue with the input"
         })
        }else{
            const fullMituelInformation = MituelInformationModel.findOne(mituelInfoId);
            if(fullMituelInformation){
                const UpdatedMituelInfoInsuranceCoverage = MituelInformationModel.updateMituelInformationInsuranceCoverage(mituelInfoId,insuranceCoverage);
                res.status(200).json({
                    status:200,
                    data:UpdatedMituelInfoInsuranceCoverage
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

export default MituelInformationControllers;