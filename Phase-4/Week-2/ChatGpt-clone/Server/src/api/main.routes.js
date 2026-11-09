import express from "express";
import cors from "cors";
import chatRouter from "./chat/chat.routes.js";
const mainRouter = express.Router();

mainRouter.use(cors());
mainRouter.use("/chat", chatRouter);

export default mainRouter;
