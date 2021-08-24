import express from "express";

const apiRouter = express.Router();

// apiRouter.post(
//   "/login/:userId",
//   encode:Function,
//   (req: Request, res: Response, next: any) => {}
// );

apiRouter.post("/login/:userId");

export default apiRouter;
