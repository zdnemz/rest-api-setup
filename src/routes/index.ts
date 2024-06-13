// routing
import { Router } from "express";
import { health } from "./health";

export const router = Router();

router.use("/health", health);
