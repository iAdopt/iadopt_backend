import { ApiError } from '../middlewares/errorHandler';

export const dbErrorWrapper = (service: Function) => async (...args: any): Promise<any> => {
  try {
<<<<<<< HEAD
    await service(args);
=======
    return await service(...args);
>>>>>>> master
  } catch (err) {
    throw new ApiError(500, err);
  }
};
