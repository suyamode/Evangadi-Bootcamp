import express from "express";
import {
  createCoversationController,
  getConversationController,
} from "./controller/chat.controller.js";

const chatRouter = express.Router();

chatRouter.post("/conversation", createCoversationController);
chatRouter.get("/conversation", getConversationController);
export default chatRouter;
