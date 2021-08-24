import express from 'express';
import * as animalsController from '../controllers/animals.controller';

const router = express.Router();

router.get('/all', animalsController.all);
router.get('/byId/:Id', animalsController.byId);
router.get('/bySpecie/:specie', animalsController.bySpecie);

export default router;
