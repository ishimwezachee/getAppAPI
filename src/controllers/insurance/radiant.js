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
}

export default RadiantInformationController