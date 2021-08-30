import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import {
  getAllAnimals,
  getAnimalById,
  getAnimalsBySpecie
} from '../services/animals.services';

export const all = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const animals = await getAllAnimals();
    res.send(animals.rows);
  }
);

export const byId = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.Id;
    console.log(id);

    if (typeof id !== 'string') {
      throw new ApiError(400, 'Missing requiered Id.');
    }

    if (!uuidValidate(id)) {
      throw new ApiError(400, 'Specified Id is not a valid uuid');
    }

    const animals = await getAnimalById(id);

    if (!animals.rows.length) {
      throw new ApiError(400, 'No animal corresponds to the given uuid');
    }

    res.send(animals.rows[0]);
  }
);

export const bySpecie = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const specie = req.params.specie;
    const animalsBySpecie = await getAnimalsBySpecie(specie);
    res.send(animalsBySpecie.rows);
  }
);
