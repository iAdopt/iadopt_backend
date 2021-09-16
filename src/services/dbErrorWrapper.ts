import { ApiError } from '../middlewares/errorHandler';
import { logger } from '../utils/logger';

export const dbErrorWrapper = (service: Function) => async (...args: any): Promise<any> => {
  try {
    return await service(...args);
  } catch (err) {
    await logger('POSTGRES', err);
    throw new ApiError(500, err);
  }
};
