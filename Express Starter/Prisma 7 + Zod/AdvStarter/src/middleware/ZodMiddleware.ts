import { RequestHandler } from "express";
import z, { ZodError, ZodType } from "zod";
import { BadRequest } from "../errors/Errors";
import { AnyZodObject } from "zod/v3";

export const validate =
  <T extends AnyZodObject>(schema: T): RequestHandler =>
  async (req, res, next) => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      req.body = parsed.body;
      req.params = parsed.params;
      req.query = parsed.query;

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return next(
          new BadRequest("Validation Error", err.flatten().fieldErrors),
        );
      }
      next(err);
    }
  };
