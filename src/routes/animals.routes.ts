import express from 'express';
import * as animalsController from '../controllers/animals/animals.controllers';

const router = express.Router();

router.get('/get/all', animalsController.all);
router.get('/get/byId/:Id', animalsController.byId);
router.get('/get/bySpecies/:species', animalsController.bySpecies);
router.post('/get/byFilter', animalsController.byFilter);

export default router;
