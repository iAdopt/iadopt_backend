import { ApiError } from '../middlewares/errorHandler';

export const dbErrorWrapper = (service: Function) => async (...args: any): Promise<any> => {
  try {
    await service(args);
  } catch (err) {
    throw new ApiError(500, err);
  }
};
