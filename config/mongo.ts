import mongoose from 'mongoose';

const CONNECTION_URL =
  'mongodb+srv://jaumereverte:jaumereverte@clusterpostgrado.mqumw.mongodb.net/iadopt?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected.');
  })
  .catch((err) => console.log('ERROR...' + err.message));
