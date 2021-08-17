import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import { getAllAnimals, getAnimalById } from '../services/animals.services';

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();
  res.send(animals.rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.query;

  if (typeof id !== 'string') {
    throw new ApiError(400, 'Missing requiered Id.');
  }

  if (!uuidValidate(id)) {
    throw new ApiError(400, 'Specified Id is not a valid uuid');
  }

  const animals = await getAnimalById(id);
  res.send(animals.rows[0]);
});

export function bySpecie(req: Request, res: Response): void {
  res.send('NOT IMPLEMENTED');
}
