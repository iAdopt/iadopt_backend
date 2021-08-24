import express from 'express';
import animalsRouter from './animals.routes';

const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);

export default apiRouter;
