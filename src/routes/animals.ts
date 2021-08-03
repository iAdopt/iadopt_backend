import express from 'express';
import * as animalsController from '../controllers/animalsController';

const router = express.Router();

router.get('/animals', animalsController.all);

export default router;
