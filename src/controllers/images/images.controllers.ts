import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import { Request, Response } from 'express';
import { getAnimalImages, insertImage, getImage } from '../../services/images.services';


export const uploadImage = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { blob, animal } = req.body;
  const existImage = getImage(blob);

  if (!existImage) {
    await insertImage(blob, animal);
    res.status(200).send({ status: 'Image uploaded!' });
  } else {
    throw new ApiError(400, 'Repeated Image');
  }
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


