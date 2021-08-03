/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */

import { Request, Response } from 'express';

class ApiError extends Error {
  statusCode: number;

  name: string;

  message: string;

  constructor(status: number, message: string) {
    super();
    this.name = 'ApiError';
    this.statusCode = status;
    this.message = message;
  }
}

const errorHandleMiddleware = (error: ApiError, req: Request, res: Response): any => {
  if (error.name === 'ApiError') {
    const { statusCode, message } = error;
    return res.status(statusCode).send({ error: message });
  }
  return null;
};

export { errorHandleMiddleware, ApiError };
