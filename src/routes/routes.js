import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/familyInfo";
import StudentInformationControllers from "../controllers/occupation/student";
import EmployeeInformationControllers from "../controllers/occupation/employee";
import SelfEmployeeInformationControllers from '../controllers/occupation/self_imployed';
import OtherInformationControllers from "../controllers/occupation/other";
import MituelInformationControllers from "../controllers/insurance/mituel";
import RssbInformationControllers from "../controllers/insurance/rssb";
import RadiantInformationControllers from "../controllers/insurance/radiant";
import RamaInformationControllers from "../controllers/insurance/rama";
import OtherInsuranceInformationControllers from "../controllers/insurance/other"
const router = express.Router();
// =======================================================================================================================
              // personal information
// create personal information 
router.post("/personal",PersonalInformationControllers.createPersonalInformation);
// get personal information router.post("insurance/rssb",RssbInformationControllers.createRssbInformation);
router.get("/personal",PersonalInformationControllers.ViewAllPersonalInforamtion);
router.get("/personal/:personalInfoId",PersonalInformationControllers.viewSpicificPersonalInformation);
// update personal information
router.patch("/personal/:personalInfoId/martialStatus",PersonalInformationControllers.UpdateMartialStatus);
router.patch("/personal/:personalInfoId/province",PersonalInformationControllers.UpdateProvince);
router.patch("/personal/:personalInfoId/district",PersonalInformationControllers.UpdateDistrict);
router.patch("/personal/:personalInfoId/sector",PersonalInformationControllers.UpdateSector);
router.patch("/personal/:personalInfoId/cell",PersonalInformationControllers.UpdateCell);
router.patch("/personal/:personalInfoId/village",PersonalInformationControllers.UpdateVillage);
router.patch("/personal/:personalInfoId/email",PersonalInformationControllers.UpdateEmail);
router.patch("/personal/:personalInfoId/jobEmail",PersonalInformationControllers.UpdateJobEmail);
//delete personal information data
router.delete("/personal/:personalInfoId/",PersonalInformationControllers.deletePersonalInformation);
// =======================================================================================================================

             // family information 
// create family information 
router.post("/family",FamilyInformationController.createFamilyInformation);
// get family information 
router.get("/family",FamilyInformationController.ViewAllFamilyInformation);
router.get("/family/:familyInfoId",FamilyInformationController.viewSpecificFamilyInformation);
// update family information
router.patch("/family/:familyInfoId/telephone",FamilyInformationController.UpdatingTelephone);
router.patch("/family/:familyInfoId/childrenNumber",FamilyInformationController.updatingChildrenNumber);
router.patch("/family/:familyInfoId/dipendency",FamilyInformationController.updatingDependency);
// delete family Information ;
router.delete("/family/:familyInfoId",FamilyInformationController.deleteFamilyInformation);

                                            //occupation information 
// =======================================================================================================================
                                           // occupation_employment 

    // create employee information 
router.post("/occupation/employee",EmployeeInformationControllers.createEmployeeInformation);
    // get employee information 
router.get("/occupation/employee/:employeeInfoId",EmployeeInformationControllers.viewSpecificEmployeeInformation);
router.get("/occupation/employee",EmployeeInformationControllers.ViewAllEmployeeInformation);
    // update employee information 
router.patch("/occupation/:employeeInfoId/position",EmployeeInformationControllers.UpdateEmployeePositionInformation)
router.patch("/occupation/:employeeInfoId/province",EmployeeInformationControllers.updateEmployeeInformationProvince)
router.patch("/occupation/:employeeInfoId/district",EmployeeInformationControllers.updateEmployeeInformationDistrict)
router.patch("/occupation/:employeeInfoId/street",EmployeeInformationControllers.updateEmployeeInformationStreet)
    // delete employee information 
router.delete("/occupation/employee/:employeeInfoId",EmployeeInformationControllers.deleteEmployeeInformation);
// =======================================================================================================================
                                                // occupation_self_employment 


    // create self_employment  information 
    router.post("/occupation/self_employee",SelfEmployeeInformationControllers.createSelfEmployeeInformation);

    // get self_employment  information 
    router.get("/occupation/self_employee/:selfEmployeeInfoId",SelfEmployeeInformationControllers.viewSpecificSelfEmployeeInformation);
     router.get("/occupation/self_employee",EmployeeInformationControllers.ViewAllEmployeeInformation);
    // update self_employment  information 


    // delete self_employment  information 

// =======================================================================================================================
                                               // occupation_student


    // create student information 
    router.post("/occupation/student",StudentInformationControllers.createStudentInformation)
    // get student information 
 
    // update student information 


    // delete student information 


// =======================================================================================================================
                                                     // occupation_other 


    // create other information 
    router.post("/occupation/otherOccupation",OtherInformationControllers.createOtherInfomation);
    // get otherOccupation information 
 
    // update otherOccupation information 


    // delete otherOccupation information 

                                                             //insurance information
    // ======================================================insurance==========================================================================


    // =======================================================================================================================
                                                     // mituel_insurance


    // create mituel information 
    router.post("/insurance/mituel",MituelInformationControllers.createMituelInformation);
    // get mituel information 
 
    // update mituel information 


    // delete mituel information

    // =======================================================================================================================
                                                     // radiant_insurance


    // create radiant information 
    router.post("/insurance/radiant",RadiantInformationControllers.createRadiantInformation);
    // get radiant information 
 
    // update radiant information 


    // delete radiant information

    // =======================================================================================================================
                                                     // rama_insurance 


    // create rama information 
    router.post("/insurance/rama",RamaInformationControllers.createRamaInformation);
    // get rama information 
 
    // update rama information 


    // delete rama information

    // =======================================================================================================================
                                                     // rssb_insurance 


    // create rssb information 
    router.post("/insurance/rssb",RssbInformationControllers.createRssbInformation);
    // get rssb information 
 
    // update rssb information 

    
    // delete rssb information

    // =======================================================================================================================
                                                     // other_insurance 


    // create other information 
    router.post("/insurance/other",OtherInsuranceInformationControllers.createOtherInsuranceInformations);
    // get other information 
 
    // update other information 


    // delete other information



export default router;