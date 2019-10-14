import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";
import FamilyInformationController from "../controllers/familyInfo"

const router = express.Router();

router.post("/personal",PersonalInformationControllers.createPersonalInformation);
router.post("/family",FamilyInformationController.createFamilyInformation);

export default router;