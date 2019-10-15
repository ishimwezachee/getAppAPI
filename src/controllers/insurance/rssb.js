import Validition from '../../validations/validation';
import RssbInformationModel from "../../models/insurance/rssb";


// class that holds the whole logics

class RsssbInformationControllers {
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
}

export default RsssbInformationControllers;