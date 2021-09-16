import express from 'express';
import * as animalsController from '../controllers/animals/animals.controllers';

const router = express.Router();

router.get('/', animalsController.all);
router.post('/', animalsController.uploadAnimal);
router.get('/byId/:Id', animalsController.byId);
router.get('/bySpecies/:species', animalsController.bySpecies);
router.post('/byFilter', animalsController.byFilter);

export default router;
