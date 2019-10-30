import Validation from "../../validations/validation";
import OtherInformationModel from "../../models/occupation/other";

// a class that holds all the logic

class OtherInformationControllers{
    static createOtherInformation(req,res){
        const {
            businessType,
            businessName,
            description,
            country,
            province,
            district,
            street
        } =req.body;

        const validationObject = {
            businessType,
            businessName,
            description,
            country,
            province,
            district,
            street
        }

    // check for the error ;
    const {error }  = Validation.OtherInformationValidation(validationObject);
    if(error){
        res.status(400).json({
            status:400,
            error:`issue withe the input ${error}`
        })
    }else{
        // display a created otherInformation 
        const createdOtherInformation = OtherInformationModel.createOtherInformation(validationObject);
        res.status(400).json({
            status:400,
            data:createdOtherInformation
        })
    }
    }

    // view a specific otherOccupation information
    static viewSpecificOtherOccupationInformation(req,res){
        const OtherInfoId = Number(req.params.OtherInfoId);
        // check if the data exists;
        const OneOtherOccupationInformation = OtherInformationModel.findOne(OtherInfoId);
        if(OneOtherOccupationInformation){
            res.status(200).json({
                status:200,
                data:OneOtherOccupationInformation
            })
        }
    };

    // view all otherOccupation information;
    static ViewAllOtherOccupationInformation(req,res){
        const OtherOccupationInformation = OtherInformationModel.findAllOtherOccupationInformation();
        res.status(200).json({
            status:200,
            data:OtherOccupationInformation
        })
    }
    // delete OtherOccupation information 
    static deleteOtherOccupationInformation(req,res){
        const OtherInfoId = Number(req.params.OtherInfoId);
        const OtherInformationData = OtherInformationModel.findOne(OtherInfoId);
        if(OtherInformationData){
            const deletedOtherOccupationInformation =OtherInformationModel.deleteOtherOccupationInformationMethod(OtherInformationData);
            res.status(200).json(deletedOtherOccupationInformation)
        }
    }

}


export default OtherInformationControllers;