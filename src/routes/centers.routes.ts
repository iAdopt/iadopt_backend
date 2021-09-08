import express from 'express';
import * as centersController from '../controllers/centers/centers.controllers';

const router = express.Router();

router.post('/post/user/', centersController.registerCenter);
router.post('/get/login/', centersController.login);

export default router;
