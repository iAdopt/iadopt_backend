import * as imagesController from '../controllers/images/images.controllers';
import express from 'express';

const router = express.Router();

router.post('/post/image', imagesController.uploadImage);
router.get('/get/image/:animalId', imagesController.byAnimal);

export default router;
