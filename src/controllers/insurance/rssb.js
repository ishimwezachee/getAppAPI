import Validation from '../../validations/validation';
import RssbInformationModel from "../../models/insurance/rssb";


// class that holds the whole logics

class RssbInformationControllers {
    static createRssbInformation(req,res){
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
        const { error } = Validition.RssbInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue wit the input {error}`
            })
        }else{
            // despalay a new Rssb information ;
            const createdRssbInformation = RssbInformationModel.createRssbInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdRssbInformation
            });
        }
    }

    // view specific rssb information 
    static viewSpecificRamaInformation(req,res){
        const rssbInfoId = Number(req.params.rssbInfoId);
        const OneRssbInfo = RssbInformationModel.findOne(rssbInfoId);
        if(OneRssbInfo){
            res.status(200).json({
                status:200,
                data:OneRssbInfo
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }

    // view all rssb information ;
    static viewAllRssbInformation(req,res){
        const allRssbInformation = RssbInformationModel.findAllRssbInformation();
        res.status(200).json({
            status:200,
            data:allRssbInformation
        })
    }
    // update rssb cardNumber information 
    static updateRssbCardNumberInformation(req,res){
        const { cardNumber } = req.body;
        const rssbInfoId = Number(req.params.rssbInfoId);
        const validationObject = { rssbInfoId,cardNumber }
        // check for the error;
        const { error } = Validation.UpdateRssbCardNumberInformationValidation(validationObject);
        if(error){
            res.status(404).json({
                status:404,
                error:"issue with the input "
            })
        }else{
            const fullRssbInformation = RssbInformationModel.findOne(rssbInfoId);
            if(fullRssbInformation){
                const updatedRssbInfoCardNumber = RssbInformationModel.updateRssbInformationCardNumber(rssbInfoId,cardNumber);
                res.status(200).json({
                    status:200,
                    data:updatedRssbInfoCardNumber
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update rssb issueDate information 
    static updateRssbIssueDateInformation(req,res){
        const { issueDate } = req.body;
        const rssbInfoId = Number(req.params.rssbInfoId);
        const validationObject = { rssbInfoId,issueDate }
        // check for the error;
        const { error } = Validation.UpdateRssbIssueDateInformationValidation(validationObject);
        if(error){
            res.status(404).json({
                status:404,
                error:"issue with the input "
            })
        }else{
            const fullRssbInformation = RssbInformationModel.findOne(rssbInfoId);
            if(fullRssbInformation){
                const updatedRssbInfoIssueDate = RssbInformationModel.updateRssbInformationIssueDate(rssbInfoId,issueDate);
                res.status(200).json({
                    status:200,
                    data:updatedRssbInfoIssueDate
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update rssb insuranceExpiracy information 
    static updateRssbInsuranceExpiracyInformation(req,res){
        const { insuranceExpiracy } = req.body;
        const rssbInfoId = Number(req.params.rssbInfoId);
        const validationObject = { rssbInfoId,insuranceExpiracy }
        // check for the error;
        const { error } = Validation.UpdateRssbInsuranceExpiracyInformationValidation(validationObject);
        if(error){
            res.status(404).json({
                status:404,
                error:"issue with the input "
            })
        }else{
            const fullRssbInformation = RssbInformationModel.findOne(rssbInfoId);
            if(fullRssbInformation){
                const updatedRssbInfoInsuranceExpiracy = RssbInformationModel.updateRssbInformationInsuranceExpiracy(rssbInfoId,insuranceExpiracy);
                res.status(200).json({
                    status:200,
                    data:updatedRssbInfoInsuranceExpiracy
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update rssb insuranceCoverage information 
    static updateRssbInsuranceCoverageInformation(req,res){
        const { insuranceCoverage } = req.body;
        const rssbInfoId = Number(req.params.rssbInfoId);
        const validationObject = { rssbInfoId,insuranceCoverage }
        // check for the error;
        const { error } = Validation.UpdateRssbInsuranceCoverageInformationValidation(validationObject);
        if(error){
            res.status(404).json({
                status:404,
                error:"issue with the input "
            })
        }else{
            const fullRssbInformation = RssbInformationModel.findOne(rssbInfoId);
            if(fullRssbInformation){
                const updatedRssbInfoInsuranceCoverage = RssbInformationModel.updateRssbInformationInsuranceCoverage(rssbInfoId,insuranceCoverage);
                res.status(200).json({
                    status:200,
                    data:updatedRssbInfoInsuranceCoverage
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // delete rssb information
    static deleteRssbInformation(res,req){
        const rssbInfoId = Number(req.params.rssbInfoId);
        // check if the info exists 
        const fullInfo = RssbInformationModel.findOne(rssbInfoId);
        if(fullInfo){
            // delete the info;
            const deletedRssbInfo = RssbInformationModel.deleteRssbInformation(fullInfo);
            res.status(200).json(deletedRssbInfo);
        }
    }
}

export default RssbInformationControllers;