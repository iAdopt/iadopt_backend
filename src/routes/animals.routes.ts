import express from 'express';
import * as animalsController from '../controllers/animals.controller';

const router = express.Router();

router.get('/get/all', animalsController.all);
router.get('/get/byId/:Id', animalsController.byId);
router.get('/get/bySpecies/:species', animalsController.bySpecies);
router.post('/get/byFilter', animalsController.byFilter);
router.post('/post/uploadImage', animalsController.uploadImage);

export default router;
