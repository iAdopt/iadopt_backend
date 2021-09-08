import express from 'express';
import animalsRouter from './animals.routes';
import imagesRouter from './images.routes';
import centersRouter from './centers.routes';

const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/images', imagesRouter);
apiRouter.use('/centers', centersRouter);

export default apiRouter;
