import express from 'express';
import apiRouter from './routes/index';

const app = express();

app.use('/api', apiRouter);

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
