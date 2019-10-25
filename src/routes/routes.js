import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/familyInfo";
import StudentInformationControllers from "../controllers/occupation/student";
import EmployeeInformationControllers from "../controllers/occupation/employee";
import SelfEmployeeInformationControllers from '../controllers/occupation/self_imployed';
import OtherInformationControllers from "../controllers/occupation/other";
import MituelInformationControllers from "../controllers/insurance/mituel";
import RssbInformationControllers from "../controllers/insurance/rssb";

const router = express.Router();
              // personal information
// create personal information 
router.post("/personal",PersonalInformationControllers.createPersonalInformation);
// get personal information 
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


























router.post("/occupation/student",StudentInformationControllers.createStudentInformation);
router.post("/occupation/employee",EmployeeInformationControllers.createEmployeeInformation);
router.post("/occupation/selfEmployee",SelfEmployeeInformationControllers.createSelfEmployeeInformation);
router.post("/occupation/other",OtherInformationControllers.createOtherInfomation);
router.post("/insurance/mituel",MituelInformationControllers.createMituelInformation);
router.post("/insurance/radiant",MituelInformationControllers.createMituelInformation);
router.post("/insurance/rama",MituelInformationControllers.createMituelInformation);
router.post("/insurance/rssb",RssbInformationControllers.createRssbInformation);



export default router;