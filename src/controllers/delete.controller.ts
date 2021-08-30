import { catchErrors } from '../middlewares/errorHandler';
import { Request, Response } from 'express';

export const deleteRoomById = catchErrors(
  async (req: Request, res: Response) => {}
);

export const deleteMessageById = catchErrors(
  async (req: Request, res: Response) => {}
);
