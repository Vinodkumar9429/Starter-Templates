import { RequestHandler } from "express";
import { ZodType } from "zod";

export const validate = (schema : ZodType, source : "body" | "query" | "params" = "body") : RequestHandler => (req, res, next) => {
    try{
        const parsed = schema.parse(req[source]);
        req[source] = parsed;
        next();
    } catch {
        return res.status(400).json({
            error : "Validation failed!"
        })
    }
}