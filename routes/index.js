import express from 'express';
import HomeController from '../controller/HomeController.js';
import userRouter from './user.js';
const homeController = new HomeController();

const router = express.Router();

router.get('/',homeController.home);





router.use('/user',userRouter);
// router.get('/form',homeController.form);
console.log("inside route")

export default router ;