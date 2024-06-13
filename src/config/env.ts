import dotenv from "dotenv";

dotenv.config();

export const env = {
  // app
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_PORT: Number(process.env.APP_PORT) || 3000,
  // cors
  CORS_ORIGIN: process.env.CORS_ORIGIN as string,
  // jwt
  JWT_SECRET: process.env.JWT_SECRET as string,
  // database
  MONGO_URL: process.env.MONGO_URL as string,
  MONGO_DB: process.env.MONGO_DB as string,
};
