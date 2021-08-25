import express from 'express';
import { resourceLimits } from 'worker_threads';
import * as animalsController from '../controllers/animals.controller';

const router = express.Router();

router.get('/all', animalsController.all);
router.get('/byId/:Id', animalsController.byId);
router.get('/bySpecie/:specie', animalsController.bySpecie);
router.get('/byGender/:gender',animalsController.byGender);
router.get('/byFilter',animalsController.byFilter);

export default router;