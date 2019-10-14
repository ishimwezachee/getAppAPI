import express from "express";
import multer from "../middlewares/multer_config";
import UserInformationControllers from "../controllers/userInformation";

const router = express.Router();

router.post('/',multer,UserInformationControllers.createUserInformation);
router.get('/',UserInformationControllers.viewAllUserInformation);
router.get('/:userInformationId',UserInformationControllers.viewSpecificUserInformation);
router.patch('/:userInformationId/occuption',UserInformationControllers.updateOccupationUserInformation);
router.delete('/:userInformationId',UserInformationControllers.deleteUserAllInformation);

export default router;