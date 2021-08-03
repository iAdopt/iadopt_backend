import express from 'express';
import animalsRouter from './routes/animals';

const app = express();

app.use('/animals', animalsRouter);

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
