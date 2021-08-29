import { ApiError } from '../middlewares/errorHandler';

export const dbErrorWrapper = (service: Function) => async (...args: any): Promise<any> => {
  try {
    const serviceDbW = await service(...args);
    return serviceDbW;
  } catch (err) {
    throw new ApiError(500, err);
  }
};



