import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/occupation/familyInfo";
import StudentInformationControllers from "../controllers/occupation/student";
import EmployeeInformationControllers from "../controllers/occupation/employee";
import SelfEmployeeInformationControllers from '../controllers/occupation/self_imployed';
import OtherInformationControllers from "../controllers/occupation/other";
import MituelInformationControllers from "../controllers/insurance/mituel";
import RssbInformationControllers from "../controllers/insurance/rssb";

const router = express.Router();

router.post("/personal",PersonalInformationControllers.createPersonalInformation);
router.post("/family",FamilyInformationController.createFamilyInformation);
router.post("/occupation/student",StudentInformationControllers.createStudentInformation);
router.post("/occupation/employee",EmployeeInformationControllers.createEmployeeInformation);
router.post("/occupation/selfEmployee",SelfEmployeeInformationControllers.createSelfEmployeeInformation);
router.post("/occupation/other",OtherInformationControllers.createOtherInfomation);
router.post("/insurance/mituel",MituelInformationControllers.createMituelInformation);
router.post("/insurance/rssb",RssbInformationControllers.createRssbInformation);

export default router;