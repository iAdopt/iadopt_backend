import express from "express";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import config from "config";
// mongo connection
import "../config/mongo";
// socket configuration
// import WebSockets from "./utils/WebSockets";
// routes
import apiRouter from "./routes/index";
import indexRouter from "./routes/indexChat";
import userRouter from "./routes/user";
import chatRoomRouter from "./routes/chatRoom";
import deleteRouter from "./routes/delete";
// middlewares
import { errorHandleMiddleware } from "./middlewares/errorHandler";
import schema from "./graphql";

const app = express();

app.use(helmet(config.get('helmetConfig')));
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

// Chat
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", chatRoomRouter);
app.use("/delete", deleteRouter);

// API
app.use("/api", apiRouter);
app.use(errorHandleMiddleware);

// GraphQL
app.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true
  }))
);

app.listen(8080, () => {
  console.log("Server running on port http://localhost:8080");
});
