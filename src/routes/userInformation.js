import express from "express";
import UserInformationControllers from "../controllers/userInformation";

const router = express.Router();

router.post('/',UserInformationControllers.createUserInformation);
router.get('/',UserInformationControllers.viewAllUserInformation);

export default router;