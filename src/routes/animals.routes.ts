import express from 'express';
import * as animalsController from '../controllers/animals.controller';

const router = express.Router();

router.get('/all', animalsController.all);
router.get('/byId/:Id', animalsController.byId);
router.get('/byspecies/:species', animalsController.byspecies);
router.post('/byFilter', animalsController.byFilter);

export default router;
