/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from "joi";
import type { Request, Response } from "express";
import { responseError } from "./response";

export const validate = (
  schema: Joi.ObjectSchema,
  req: Request,
  res: Response
) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json(
      responseError(400, {
        details: error.details.map((e) => e.message),
      })
    );

    return;
  } else {
    return { ...req, body: value } as Request;
  }
};
