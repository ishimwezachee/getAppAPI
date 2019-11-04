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
    static viewAllRamaInformaion(req,res){
        const ramaInformation = RamaInformationModel.findAllRamaInformation();
        res.status(200).json({
            status:200,
            data:ramaInformation
        })
    }
}


export default RamaInformationControllers;