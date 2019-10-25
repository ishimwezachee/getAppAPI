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

            const createdRamaInformation  = RamaInformationModel.createRamainformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdRamaInformation
            })
        }
    }
}


export default RamaInformationControllers;