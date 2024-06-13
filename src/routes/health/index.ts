import { responseSuccess } from "../../utils/response";
import { Router } from "express";

export const health = Router();

health.get("/", (req, res, next) => {
  try {
    res.status(200).json(responseSuccess(200));
  } catch (error) {
    next(error);
  }
});
