import jwt from "jsonwebtoken";
import { env } from "@/config";

export const signToken = (payload: object) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
