import express from "express";
import UserInformationControllers from "../controllers/userInformation";

const router = express.Router();

router.post('/',UserInformationControllers.createUserInformation);

export default router;