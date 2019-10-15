import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/familyInfo";
import StudentInformationControllers from "../controllers/student";
import EmployeeInformationControllers from "../controllers/employee";
import SelfEmployeeInformationControllers from '../controllers/self_imployed';
import OtherInformationControllers from "../controllers/other";

const router = express.Router();

router.post("/personal",PersonalInformationControllers.createPersonalInformation);
router.post("/family",FamilyInformationController.createFamilyInformation);
router.post("/occupation/student",StudentInformationControllers.createStudentInformation);
router.post("/occupation/employee",EmployeeInformationControllers.createEmployeeInformation);
router.post("/occupation/selfEmployee",SelfEmployeeInformationControllers.createSelfEmployeeInformation);
router.post("/occupation/other",OtherInformationControllers.createOtherInfomation);

export default router;