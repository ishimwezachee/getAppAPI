import express from 'express';
import UserControllers from "../controllers/user";

const router = express.Router();

router.post('/signup',UserControllers.signup);
router.post('/login',UserControllers.login);

export default router;