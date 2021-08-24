import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://jaumereverte:jaumereverte@clusterpostgrado.mqumw.mongodb.net/iadopt?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch((err) => console.log("ERROR..." + err.message));
