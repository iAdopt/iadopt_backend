import { NextFunction, Request, Response } from 'express';

class ApiError extends Error {
  statusCode: number;
  name: string;
  message: string;

  constructor (status: number, message: string) {
    super();
    this.name = 'ApiError';
    this.statusCode = status;
    this.message = message;
  }
}

const errorHandleMiddleware = (error: ApiError, req: Request, res: Response, next: NextFunction): any => {
  if (error.name === 'ApiError') {
    const { statusCode, message } = error;
    return res.status(statusCode).send({ error: message });
  }
};

const catchErrors = (route: Function) => async (req: Request, res: Response, next: Function, ...args: any): Promise<void> => {
  try {
    await route(req, res, next, ...args);
  } catch (err) {
    next(err);
  }
};

export { errorHandleMiddleware, ApiError, catchErrors };
