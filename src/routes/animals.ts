import express from 'express';
import * as animalsController from '../controllers/animalsController';

const router = express.Router();

router.get('/all', animalsController.all);

export default router;
