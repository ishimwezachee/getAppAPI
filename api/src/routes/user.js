import express from 'express';
import UserControllers from "../controllers/user";

const router = express.Router();

router.post('/signup',UserControllers.signup);

export default router;