import Validation from "../validations/validation";
import PersonalInformationModel from "../models/personalInfo";


// create a class that holds all the logics

class PersonalInformationControllers{
    //method to create 
    static createPersonalInformation(req,res){
        const {
            firstName,
            middleName,
            surName,
            birthDate,
            birthPlace,
            nationality,
            sex,
            nationalId,
            martialStatus,
            country,
            province,
            district,
            sector,
            cell,
            village,
            email,
            jobEmail,
            primaryNumber,
            secondaryNumber
        }=req.body;

        // validate the data from req.body;
        const validationObject = {
            firstName,
            middleName,
            surName,
            birthDate,
            birthPlace,
            nationality,
            sex,
            nationalId,
            martialStatus,
            country,
            province,
            district,
            sector,
            cell,
            village,
            email,
            jobEmail,
            primaryNumber,
            secondaryNumber
        };

     // logic 
     const { error }=Validation.personalInformationValidation(validationObject);
     if(error){
         res.status(400).json({
             status:400,
             error:`issue with the input ${error}`
         });
     }else{
         // create PersonalInformation 
         const createdPersonalInformation = PersonalInformationModel.createPersonalInformation(validationObject);
         res.status(201).json({
             status:201,
             data:createdPersonalInformation
         }) 
     }
    }

// view specific information
 static viewSpicificPersonalInformation(req,res){
     const personalInfoId = Number(req.params.personalInfoId);
     // check if Information exists;
     const OnePersonalInfo = PersonalInformationModel.findOne(personalInfoId);
     if(OnePersonalInfo){
         res.status(200).json({
             status:200,
             data:OnePersonalInfo
         })
     }else{
         res.status(404).json({
             status:404,
             message:"data  not found"
         })
     }
 }

 static ViewAllPersonalInforamtion(req,res){
     // fetch all for the personal information 
     const informations = PersonalInformationModel.findAllPersonalInformation()
   res.status(200).json({
      status:200,
      data:informations
   })
 }

// update martialStatus info
 static UpdateMartialStatus(req,res){
    const { martialStatus } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { personalInfoId, martialStatus};
    const { error } = Validation.UpdatePersonalInformationMartialStatus(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingMartialStatusMethod(personalInfoId, martialStatus);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
   // update province info
 static UpdateProvince(req,res){
    const { province } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { province, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationProvince(validationObject)

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
       console.log(fullPersonalInfo)
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingProvinceMethod(personalInfoId, province);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
    // update district
 static UpdateDistrict(req,res){
    const { district } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { district, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationDistrict(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingDistrictMethod(personalInfoId, district)
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
     // update sector
 static UpdateSector(req,res){
    const { sector } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = {sector, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationSector(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingSectorMethod(personalInfoId, sector);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation,
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
      // update cell
 static UpdateCell(req,res){
    const { cell } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { cell, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationCell(validationObject)

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingCellMethod(personalInfoId,cell)
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
     // update village
 static UpdateVillage(req,res){
    const { village } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { village, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationVillage(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
       console.log(fullPersonalInfo)
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingvillageMethod(personalInfoId, village);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation,
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
    // update email
 static UpdateEmail(req,res){
    const { email } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { email, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationEmail(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingEmailMethod(personalInfoId, email);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation,
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }
   // update JobEmail
 static UpdateJobEmail(req,res){
    const { jobEmail } = req.body;
    const personalInfoId = Number(req.params.personalInfoId); 

    const validationObject  = { jobEmail, personalInfoId };
    const { error } = Validation.UpdatePersonalInformationJobEmail(validationObject)

    if(error){
        res.status(400).json({
            status:400,
            error:'issue with the input '
        });
    }else{
        //check if the personal info exists
        const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
        if(fullPersonalInfo){
        const updatedPersonalInformation = PersonalInformationModel.updatingJobEmailEmail(personalInfoId, jobEmail);
            res.status(200).json({
                status:200,
                data:updatedPersonalInformation,
            });
        }else{
            res.status(404).json({
                status:404,
                error:'data was not found'
            });
        }
    }
    
 }

 // delete personalInformation 

  static deletePersonalInformation(req,res){
    const personalInfoId = Number(req.params.personalInfoId);
    // check if the post exists
    const fullPersonalInfo = PersonalInformationModel.findOne(personalInfoId);
    if(fullPersonalInfo){
        const deletedPersonalInformation = PersonalInformationModel.deletePersonalInformation(fullPersonalInfo);
        res.status(200).json(deletedPersonalInformation);
    }
    
  }
}

export default PersonalInformationControllers;