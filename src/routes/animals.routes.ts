import express from 'express';
import * as animalsController from '../controllers/animals.controller';

const router = express.Router();

router.get('/all', animalsController.all);

export default router;
