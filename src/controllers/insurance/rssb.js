import Validition from '../../validations/validation';
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
}

export default RssbInformationControllers;