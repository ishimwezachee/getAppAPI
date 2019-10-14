import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/familyInfo";
import StudentInformation from "../controllers/student";

const router = express.Router();

router.post("/personal",PersonalInformationControllers.createPersonalInformation);
router.post("/family",FamilyInformationController.createFamilyInformation);
router.post("/occupation/student",StudentInformation.createStudentInformation);

export default router;