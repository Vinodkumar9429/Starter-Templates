import { ErrorRequestHandler } from "express";
import { ENV } from "../config/env";

export const globalError: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational ?? false;

  if (ENV.NODE_ENV === "production") {
    if (isOperational) {
      return res.status(statusCode).json({
        statusCode,
        message: err.message,
        errors: err.errors ?? undefined,
      });
    }

    return res.status(500).json({
      statusCode: 500,
      message: "Something went wrong",
    });
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    errors: err.errors ?? undefined,
    message: err.message,
    name: err.name,
    path: req.originalUrl,
    method: req.method,
    stack: err.stack,
  });
};
