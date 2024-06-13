import { Request, Response } from "express";
import { responseError } from "@/utils";

export const errorHandler = (err: unknown, req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(500).json(responseError(500, { details: err.message }));
  }

  res.status(500).json(responseError(500));
};
