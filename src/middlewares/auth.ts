import { env } from "@/config";
import { IFunction, Decoded } from "@/types";
import { responseError } from "@/utils";
import jwt from "jsonwebtoken";

export const verify: IFunction = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json(responseError(401));
    }

    const decoded = jwt.verify(accessToken, env.JWT_SECRET!);

    if (!decoded) {
      return res.status(401).json(responseError(401));
    }

    req.user = decoded as Decoded;

    next();
  } catch (error) {
    return res
      .status(401)
      .json(responseError(401, { details: (error as Error).message }));
  }
};
