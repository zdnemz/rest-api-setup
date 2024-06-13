import { Request, Response, NextFunction } from "express";

export type Decoded = {
  id: string;
  username: string;
  email: string;
};

interface RequestWithUser extends Request {
  user: Decoded;
}

export type IFunction = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => unknown;
