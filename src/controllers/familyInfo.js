import Validation from "../validations/validation"
import FamilyInformationModel from "../models/familyInfo";


// create the class that hold all the logics

class FamilyInformationControllers{
    // method to create;
    static createFamilyInformation(req,res){
        const{
            father_firstName,
            father_surName,
            mother_firstName,
            mother_surName,
            spouse_firstName,
            spouse_middleName,
            spouse_surName,
            spouseId,
            telephone,
            childrenNumber,
            dependency
        }= req.body;

        const validationObject = {
            father_firstName,
            father_surName,
            mother_firstName,
            mother_surName,
            spouse_firstName,
            spouse_middleName,
            spouse_surName,
            spouseId,
            telephone,
            childrenNumber,
            dependency
        };

        const { error } = Validation.familyInformationValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:`issue with the input ${error}`
            });
        }else{
            // create the family information
            const createdFamilyInformation = FamilyInformationModel.createFamilyInformation(validationObject);
            res.status(201).json({
                status:201,
                data:createdFamilyInformation
            });
        }
    }

   // view specific family information 

   static viewSpecificFamilyInformation(req,res){
       const familyInfoId = Number(req.params.familyInfoId);
       // check if the family information exists;
       const OneFamilyInformation = FamilyInformationModel.findOne(familyInfoId);
       if(OneFamilyInformation){
           res.status(200).json({
               status:200,
               data:OneFamilyInformation
           });
       }else{
           res.status(404).json({
               status:404,
               message:"data was not found "
           })
       }
   };
   // view all family information 
   static ViewAllFamilyInformation(req,res){
       // fetch all the family information 
       const familyInformations = FamilyInformationModel.findAllFamilyInformations();
       res.status(200).json({
           status:200,
           data:familyInformations
       })
   }

   // updating telephone family info;
   static UpdatingTelephone(req,res){
       const { telephone } = req.body;
       const familyInfoId = Number(req.params.familyInfoId);
       const validationObject =  { familyInfoId, telephone };
       const { error } = Validation.UpdateFamilyInformationTelephone(validationObject); 

       if(error){
           res.status(400).json({
               status:400,
               error : "issue with the input ",

           });
       }else{
           // check if the family info exists;
           const fullFamilyInfo = FamilyInformationModel.findOne(familyInfoId);
           if(fullFamilyInfo){
           const updatedTelephoneFamilyInformation = FamilyInformationModel.updatingTelephoneMethod(familyInfoId,telephone);
            res.status(200).json({
                status:200,
                data:updatedTelephoneFamilyInformation,
                console:console.log(updatedTelephoneFamilyInformation)
            })
           }else{
            res.status(404).json({
                status:404,
                error:"data was not found "
            });
        }
       }

   }

   // updating ChildrenNumber family info;

   static updatingChildrenNumber(req,res){
       const { childrenNumber }  = req.body;
       const familyInfoId = Number(req.params.familyInfoId);
       const validationObject = { familyInfoId, childrenNumber};
       const { error }  = Validation.UpdateFamilyInformationChildrenNumber(validationObject);

       if(error){
           res.status(400).json({
               status:400,
               error:"issue with the input"
           });
       }else{
           // check if the family information exists;
           const fullFamilyInformation  = FamilyInformationModel.findOne(familyInfoId);
           if(fullFamilyInformation){
               const updatedChildrenFamilyInformation = FamilyInformationModel.updatingChildrenNumberMethod(familyInfoId,childrenNumber);
               res.status(200).json({
                   status:200,
                   data:updatedChildrenFamilyInformation
               });
           }else{
               res.status(404).json({
                   status:404,
                   error:"data was not found "
               });
           }
       }
   }

   // updating dependency family info ;
   static updatingDependency(req,res){
       const { dependency } = req.body;
       const familyInfoId = Number(req.params.familyInfoId);
       const validationObject = { familyInfoId, dependency };
       const { error } = Validation.UpdateFamilyInformationDependecy(validationObject);

    if(error){
        res.status(400).json({
            status:400,
            error:"issue with the input"
        });  
    }else{
        // check if the info exist 
        const fullFamilyInfo = FamilyInformationModel.findOne(familyInfoId);
        if(fullFamilyInfo){
            const updatedDependencyFamilyInformation = FamilyInformationModel.updatingDependencyMethod(familyInfoId,dependency);
            res.status(200).json({
                status:200,
                data:updatedDependencyFamilyInformation
            })
        }else{
            res.status(404).json({
                status:404,
                error:"data was not found "
            });
        }
    }
   }
}

export default FamilyInformationControllers;