import { catchErrors } from '../../middlewares/errorHandler';
import { Request, Response } from 'express';
import { getAnimalImages, insertImage } from '../../services/images.services';

export const uploadImage = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { blob, animal } = req.body;
  await insertImage(blob, animal);
  res.status(200).send({ status: 'Image uploaded!' });
});

export const byAnimal = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animalId = req.params.animalId;
  const images = await getAnimalImages(animalId);

  images.rows.map((image: any) => {
    image.blob = image.blob.toString('base64');
    return image;
  });

  res.status(200).send(images.rows);
});
