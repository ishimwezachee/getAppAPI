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
import OtherInsuranceInformationControllers from "../controllers/insurance/other";
import BankController from "../controllers/bank/bank";
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
router.get("/occupation/self_employee",SelfEmployeeInformationControllers.ViewAllSelfEmployeeInformation);
// update self_employment  information 
router.patch("/occupation/self_employee/:selfEmployeeInfoId/businessType",SelfEmployeeInformationControllers.UpdateSelfEmployeeBusinessTypeInformation);
router.patch("/occupation/self_employee/:selfEmployeeInfoId/businessName",SelfEmployeeInformationControllers.UpdateSelfEmployeeBusinessNameInformation);
router.patch("/occupation/self_employee/:selfEmployeeInfoId/province",SelfEmployeeInformationControllers.UpdateSelfEmployeeProvinceInformation);
router.patch("/occupation/self_employee/:selfEmployeeInfoId/district",SelfEmployeeInformationControllers.UpdateSelfEmployeeDistrictInformation);
router.patch("/occupation/self_employee/:selfEmployeeInfoId/street",SelfEmployeeInformationControllers.UpdateSelfEmployeeStreetInformation);
// delete self_employment  information 
router.delete("/occupation/self_employee/:selfEmployeeInfoId",SelfEmployeeInformationControllers.deleteSelfEmployeeInformation);
// =======================================================================================================================
                                               // occupation_student


    // create student information 
    router.post("/occupation/student",StudentInformationControllers.createStudentInformation)
    // get student information 
    router.get("/occupation/student/:studentInfoId",StudentInformationControllers.viewSpecificStudentInformation);
    router.get("/occupation/student",StudentInformationControllers.viewAllStudentInformation);
    // update student information 
    router.patch("/occupation/student/:studentInfoId/school",StudentInformationControllers.UpdateStudentSchoolInformationOccupation);
    router.patch("/occupation/student/:studentInfoId/province",StudentInformationControllers.UpdateStudentProvinceInformationOccupation);
    router.patch("/occupation/student/:studentInfoId/district",StudentInformationControllers.UpdateStudentDistrictInformationOccupation);
    router.patch("/occupation/student/:studentInfoId/street",StudentInformationControllers.UpdateStudentStreetInformationOccupation);

    // delete student information 
     router.delete("/occupation/student/:studentInfoId",StudentInformationControllers.deleteStudentInformationData);

// =======================================================================================================================
                                                     // occupation_other 


    // create other information 
    router.post("/occupation/otherOccupation",OtherInformationControllers.createOtherInformation);
    // get otherOccupation information 
    router.get("/occupation/other/:OtherInfoId",OtherInformationControllers.viewSpecificOtherOccupationInformation);
    router.get("/occupation/other",OtherInformationControllers.ViewAllOtherOccupationInformation);
    // update otherOccupation information 

    // delete otherOccupation information 
    router.delete("/occupation/other/:OtherInfoId",OtherInformationControllers.deleteOtherOccupationInformation);
                                                             //insurance information
    // ======================================================insurance==========================================================================
    // =======================================================================================================================
                                                     // mituel_insurance


    // create mituel information 
    router.post("/insurance/mituel",MituelInformationControllers.createMituelInformation);
    // get mituel information 
    router.get("/insurance/mituel/:mituelInfoId",MituelInformationControllers.viewSpecificMituelInformation);
    router.get("/insurance/mituel",MituelInformationControllers.viewAllMituelInformation);
    // update mituel information 
     router.patch("/insurance/mituel/:mituelInfoId/cardNumber",MituelInformationControllers.updateMituelCardNumberInformation);
     router.patch("/insurance/mituel/:mituelInfoId/issueDate",MituelInformationControllers.updateMituelIssueDateInformation);
     router.patch("/insurance/mituel/:mituelInfoId/insuranceExpiracy",MituelInformationControllers.updateMituelInsuranceExpiracyInformation);
     router.patch("/insurance/mituel/:mituelInfoId/insuranceCoverage",MituelInformationControllers.updateMituelInsuranceCoverageInformation);

    // delete mituel information
    router.delete("/insurance/mituel/:mituelInfoId/",MituelInformationControllers.deleteMituelInformation);
    // =======================================================================================================================
                                                     // radiant_insurance


    // create radiant information 
    router.post("/insurance/radiant",RadiantInformationControllers.createRadiantInformation);
    // get radiant information 
    router.get("/insurance/radiant/:radiantInfoId",RadiantInformationControllers.viewSpecificRadiantInformation);
    router.get("/insurance/radiant",RadiantInformationControllers.viewAllRadiantInformation);
    // update radiant information 
    router.patch("/insurance/radiant/:radiantInfoId/cardNumber",RadiantInformationControllers.updateRadiantCardNumberInformation);
    router.patch("/insurance/radiant/:radiantInfoId/issueDate",RadiantInformationControllers.updateRadiantIssueDateInformation);
    router.patch("/insurance/radiant/:radiantInfoId/insuranceExpiracy",RadiantInformationControllers.updateRadiantInsuranceExpiracyInformation);
    router.patch("/insurance/radiant/:radiantInfoId/insuranceCoverage",RadiantInformationControllers.updateRadiantInsuranceCoverageInformation);

    // delete radiant information
    router.delete("/insurance/radiant/:radiantInfoId",RadiantInformationControllers.deleteRadiantInformation);
    // =======================================================================================================================
                                                     // rama_insurance 


    // create rama information 
    router.post("/insurance/rama",RamaInformationControllers.createRamaInformation);
    // get rama information 
    router.get("/insurance/rama",RamaInformationControllers.viewAllRamaInformation);
    router.get("/insurance/rama/:ramaInfoId",RamaInformationControllers.viewSpecificRamaInformation);
    // update rama information 
    router.patch("/insurance/rama/:ramaInfoId/cardNumber",RamaInformationControllers.updateRamaCardNumberInformation);
    router.patch("/insurance/rama/:ramaInfoId/issueDate",RamaInformationControllers.updateRamaIssueDateInformation);
    router.patch("/insurance/rama/:ramaInfoId/insuranceExpiracy",RamaInformationControllers.updateRamaInsuranceExpiracyInformation);
    router.patch("/insurance/rama/:ramaInfoId/insuranceCoverage",RamaInformationControllers.updateRamaInsuranceCoverageInformation);
    // delete rama information
    router.delete("/insurance/rama/:ramaInfoId",RamaInformationControllers.deleteRamaInformation)
    // =======================================================================================================================
                                                     // rssb_insurance 


    // create rssb information 
    router.post("/insurance/rssb",RssbInformationControllers.createRssbInformation);
    // get rssb information 
    router.get("/insurance/rssb",RssbInformationControllers.viewAllRssbInformation);
    router.get("/insurance/rssb/:rssbInfoId",RssbInformationControllers.viewSpecificRamaInformation);
    // update rssb information 
    router.patch("/insurance/rssb/:rssbInfoId/cardNumber",RssbInformationControllers.updateRssbCardNumberInformation);
    router.patch("/insurance/rssb/:rssbInfoId/issueDate",RssbInformationControllers.updateRssbIssueDateInformation);
    router.patch("/insurance/rssb/:rssbInfoId/insuranceExpiracy",RssbInformationControllers.updateRssbInsuranceExpiracyInformation);
    router.patch("/insurance/rssb/:rssbInfoId/insuranceCoverage",RssbInformationControllers.updateRssbInsuranceCoverageInformation);
    // delete rssb information
    router.delete("/insurance/rssb/:rssbInfoId",RssbInformationControllers.deleteRssbInformation);
    // =======================================================================================================================
                                                     // other_insurance 


    // create other information 
    router.post("/insurance/other",OtherInsuranceInformationControllers.createOtherInsuranceInformations);
    // get other information 
    router.get("/insurance/other",OtherInsuranceInformationControllers.viewAllOtherInsuranceInformation);
    router.get("/insurance/other/:otherInfoId",OtherInsuranceInformationControllers.viewSpecificOtherInsuranceInfo);
    // update other information 

    // delete other information
    router.delete("/insurance/other/:otherInfoId",OtherInsuranceInformationControllers.deleteOtherInsuranceInfo);
// ================================================================================================================================
                                                                                // Bank;
     // create a bank 
     router.post("/bank",BankController.createBankName)
     // get bank 
     router.get("/bank",BankController.viewAllBankName);
     router.get("/bank/:bankId",BankController.viewSpecificBankName)
     // update bank
     router.patch("/bank/:bankId",BankController.updateBankName)
     // delete bank
     router.delete("/bank/:bankId",BankController.deleteBankName)
     //============================================AssetsInformation ==============================
                                                //  fixed assets information
       // create fixed assets
       // get fixed assets
       // update fixed assets
       // delete fixed assets
                                               // current assets information 
       // create current assets
       // get current assets
       // update current assets
       // delete current assets
       // ======================================social media============================================
       // create social media 
       // get social media
       // update social media
       // delete social media   
       //====================================files ========================================
       // upload files //create files
       // get files
       // update files 
       // delete files 

export default router;