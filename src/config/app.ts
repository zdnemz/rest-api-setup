import { errorHandler } from "@/middlewares";
import { router } from "@/routes";
import express from "express";

export const app = express();

app.use(express.json());
app.use(express.static("public")); // for static files

app.use("/api", router);

app.use(errorHandler); // global error handler
