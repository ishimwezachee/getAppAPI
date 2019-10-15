import Validition from '../../validations/validation';
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
        const { error } = Validition.MituelInformationValidation(validationObject);
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
}

export default MituelInformationControllers;