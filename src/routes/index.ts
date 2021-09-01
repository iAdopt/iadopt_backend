import express from 'express';
import animalsRouter from './animals.routes';
import imagesRouter from './images.routes';

const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/images', imagesRouter);

export default apiRouter;
