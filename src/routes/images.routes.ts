import * as imagesController from '../controllers/images/images.controllers';
import express from 'express';

const router = express.Router();

router.post('/', imagesController.uploadImage);
router.get('/:animalId', imagesController.byAnimal);

export default router;
