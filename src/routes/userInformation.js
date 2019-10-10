import express from "express";
import UserInformationControllers from "../controllers/userInformation";

const router = express.Router();

router.post('/',UserInformationControllers.createUserInformation);
router.get('/',UserInformationControllers.viewAllUserInformation);
router.get('/:userInformationId',UserInformationControllers.viewSpecificUserInformation);
router.patch('/:userInformationId/occuption',UserInformationControllers.updateOccupationUserInformation);
router.delete('/:userInformationId',UserInformationControllers.deleteUserAllInformation);

export default router;