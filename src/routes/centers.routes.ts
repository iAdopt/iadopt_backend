import express from 'express';
import * as centersController from '../controllers/centers/centers.controllers';

const router = express.Router();

router.post('/register/', centersController.registerCenter);
router.post('/login/', centersController.login);

export default router;
