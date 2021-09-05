import express from 'express';
import * as usersControllers from '../controllers/users/users.controllers';

const router = express.Router();

router.post('/post/user/',usersControllers.registerUser);
router.post('/get/login/',usersControllers.login);

export default router;