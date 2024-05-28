import express from 'express';
// import HomeController from '../controller/HomeController.js';
// const homeController = new HomeController();
import UserController from '../controller/UserController.js';
const userController = new UserController();

const router = express.Router();


router.get('/sigin',userController.sigin);

// router.get('/',homeController.home);
// router.get('/form',homeController.form);
console.log("inside user Route")

export default router ;