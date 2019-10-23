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

router.post("/personal",PersonalInformationControllers.createPersonalInformation);
router.get("/personal",PersonalInformationControllers.ViewAllPersonalInforamtion);
router.get("/personal/:personalInfoId",PersonalInformationControllers.viewSpicificPersonalInformation);
router.patch("/personal/:personalInfoId/martialStatus",PersonalInformationControllers.UpdateMartialStatus);
router.patch("/personal/:personalInfoId/province",PersonalInformationControllers.UpdateProvince);
router.patch("/personal/:personalInfoId/district",PersonalInformationControllers.UpdateDistrict);
router.patch("/personal/:personalInfoId/sector",PersonalInformationControllers.UpdateSector);
router.patch("/personal/:personalInfoId/cell",PersonalInformationControllers.UpdateCell);
router.patch("/personal/:personalInfoId/village",PersonalInformationControllers.UpdateVillage);
router.patch("/personal/:personalInfoId/email",PersonalInformationControllers.UpdateEmail);
router.patch("/personal/:personalInfoId/jobEmail",PersonalInformationControllers.UpdateJobEmail);
router.delete("/personal/:personalInfoId/",PersonalInformationControllers.deletePersonalInformation);
router.post("/family",FamilyInformationController.createFamilyInformation);
router.post("/occupation/student",StudentInformationControllers.createStudentInformation);
router.post("/occupation/employee",EmployeeInformationControllers.createEmployeeInformation);
router.post("/occupation/selfEmployee",SelfEmployeeInformationControllers.createSelfEmployeeInformation);
router.post("/occupation/other",OtherInformationControllers.createOtherInfomation);
router.post("/insurance/mituel",MituelInformationControllers.createMituelInformation);
router.post("/insurance/radiant",MituelInformationControllers.createMituelInformation);
router.post("/insurance/rama",MituelInformationControllers.createMituelInformation);
router.post("/insurance/rssb",RssbInformationControllers.createRssbInformation);



export default router;