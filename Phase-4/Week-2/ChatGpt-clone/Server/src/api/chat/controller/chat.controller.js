import { createCoversationService } from "../service/chat.service.js";
export async function createCoversationController(req, res, next) {
  try {
    const { question } = req.body;
    const result = await createCoversationService(question);
    res.status(201).send({
      success: true,
      data: result,
      message: "Conversation created successfully",
    });
  } catch (error) {
    next(error);
  }
}
export async function getConversationController(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}
