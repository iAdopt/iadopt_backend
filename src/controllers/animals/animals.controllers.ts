import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import {
  getAllAnimals,
  getAnimalById,
  getAnimalsByFilter,
  getAnimalsBySpecies, insertAnimal
} from '../../services/animals.services';
import { processImageBuffers } from './processImageBuffers';
import { validFilterValues, checkFilterValues } from './checkFilterValues';

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();
  res.send(processImageBuffers(animals).rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const id = req.params.Id;
  if (typeof id !== 'string') {
    throw new ApiError(400, 'Missing required Id.');
  }

  if (!uuidValidate(id)) {
    throw new ApiError(400, 'Specified Id is not a valid uuid');
  }

  const animals = await getAnimalById(id);

  if (!animals.rows.length) {
    throw new ApiError(400, 'No animal corresponds to the given uuid');
  }

  res.send(animals.rows[0]);
});

export const bySpecies = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const species = req.params.species;
  if (!species) {
    throw new ApiError(400, 'Missing required "species"');
  }

  const animals = await getAnimalsBySpecies(species);
  res.send(processImageBuffers(animals).rows);
});

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  let params: { [key: string]: string } = { };
  Object.entries(validFilterValues).forEach(([key, _]) => {
    params = { ...params, ...checkFilterValues(key, req.body[key]) };
  });

  const animals = await getAnimalsByFilter({ ...params });
  res.send(processImageBuffers(animals).rows);
});

export const uploadAnimal = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const result = await insertAnimal(req.body);
  res.send(result);
});
