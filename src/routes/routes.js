import express from "express";
import PersonalInformationControllers from "../controllers/personalInfo";

const router = express.Router();

router.post("/",PersonalInformationControllers.createPersonalInformation);

export default router;