import Validation from "../../validations/validation";
import SelfEmployeeInformationModel from "../../models/occupation/self_imployed";


// create a class that holds all the logics s

class SelfEmployeeInformationControllers {
    // method to create ;
     static createSelfEmployeeInformation(req,res){
         const {
            businessType,
            businessName,
            tinNumber,
            country,
            province,
            district,
            street
         } = req.body;

         const validationObject = {
            businessType,
            businessName,
            tinNumber,
            country,
            province,
            district,
            street
         }

         // check out for the error 

         const { error } = Validation.self_employeeInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue with the input ${ error }`,
                
            })
        }else{
            // display a created  selfEmployeedInformation
            const createdSelfEmployedInformation = SelfEmployeeInformationModel.createSelfEmployeeInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdSelfEmployedInformation,
            });
        }
     }
       // get one
     static viewSpecificSelfEmployeeInformation(req,res){
         const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
         // check if the self_employee information exists 
         const OneSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId);
         if(OneSelfEmployeeInformation){
             res.status(200).json({
                 status:200,
                 data:OneSelfEmployeeInformation
             })
         }else{
             res.status(404).json({
                 status:404,
                 message:"data was not found"
             })
         }
        
     }
       // fetch all 
     static ViewAllSelfEmployeeInformation(req,res){
         const  AllSelfEmployeeInformation = SelfEmployeeInformationModel.findAllSelfEmployeeInformation();
         res.status(200).json({
             status:200,
             data:AllSelfEmployeeInformation
         })
     }

    // update selfEmployee businessType information
    static UpdateSelfEmployeeBusinessTypeInformation(req,res){
        const { businessType } = req.body;
        const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
        const validationObject = { selfEmployeeInfoId,businessType};

        // check for the error 
        const {error } = Validation.UpdateSelfEmployeeInformationBusinessTypeValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId)
            if(fullSelfEmployeeInformation){
                const updatedSelfEmployeeInfoBusinessType = SelfEmployeeInformationModel.updateSelfEmployeeInfoBusinessType(selfEmployeeInfoId,businessType)
                res.status(201).json({
                    status:201,
                    data:updatedSelfEmployeeInfoBusinessType
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update selfEmployee businessName information
    static UpdateSelfEmployeeBusinessNameInformation(req,res){
        const { businessName } = req.body;
        const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
        const validationObject = { selfEmployeeInfoId,businessName};

        // check for the error 
        const {error } = Validation.UpdateSelfEmployeeInformationBusinessNameValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId)
            if(fullSelfEmployeeInformation){
                const updatedSelfEmployeeInfoBusinessName = SelfEmployeeInformationModel.updateSelfEmployeeInfoBusinessName(selfEmployeeInfoId,businessName)
                res.status(201).json({
                    status:201,
                    data:updatedSelfEmployeeInfoBusinessName
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
  // update selfEmployee province information
  static UpdateSelfEmployeeProvinceInformation(req,res){
    const {province } = req.body;
    const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
    const validationObject = { selfEmployeeInfoId,province};

    // check for the error 
    const {error } = Validation.UpdateSelfEmployeeInformationProvinceValidation(validationObject)
    if(error){
        res.status(400).json({
            status:400,
            error : " error was made with the in put "
        })
    }else{
        const fullSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId)
        if(fullSelfEmployeeInformation){
            const updatedSelfEmployeeInfoProvince = SelfEmployeeInformationModel.updateSelfEmployeeInfoProvince(selfEmployeeInfoId,province)
            res.status(201).json({
                status:201,
                data:updatedSelfEmployeeInfoProvince
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
 // update selfEmployee district information
 static UpdateSelfEmployeeDistrictInformation(req,res){
    const { district } = req.body;
    const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId);
    const validationObject = { selfEmployeeInfoId,district};

    // check for the error 
    const {error } = Validation.UpdateSelfEmployeeInformationDisrictValidation(validationObject)
    if(error){
        res.status(400).json({
            status:400,
            error : " error was made with the in put "
        })
    }else{
        const fullSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId)
        if(fullSelfEmployeeInformation){
            const updatedSelfEmployeeInfoDistrict = SelfEmployeeInformationModel.updateSelfEmployeeInfoDistrict(selfEmployeeInfoId,district)
            res.status(201).json({
                status:201,
                data:updatedSelfEmployeeInfoDistrict
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
}
 // update selfEmployee street information
 static UpdateSelfEmployeeStreetInformation(req,res){
    const { street } = req.body;
    const selfEmployeeInfoId = Number(req.params.selfEmployeeInfoId)
    const validationObject = { selfEmployeeInfoId,street};

    // check for the error 
    const {error } = Validation.UpdateSelfEmployeeInformationStreetValidation(validationObject)
    if(error){
        res.status(400).json({
            status:400,
            error : " error was made with the in put "
        })
    }else{
        const fullSelfEmployeeInformation = SelfEmployeeInformationModel.findOne(selfEmployeeInfoId)
        if(fullSelfEmployeeInformation){
            const updatedSelfEmployeeInfoStreet = SelfEmployeeInformationModel.updateSelfEmployeeInfoStreet(selfEmployeeInfoId,street)
            res.status(201).json({
                status:201,
                data:updatedSelfEmployeeInfoStreet
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

export default SelfEmployeeInformationControllers;