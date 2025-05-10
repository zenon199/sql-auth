import express from 'express'
import { registerUser } from '../controllers/Auth.controller.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)


export default userRouter;

