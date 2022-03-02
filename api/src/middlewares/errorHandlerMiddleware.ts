import { Request, Response, NextFunction } from "express";

const ErrorHandlerMiddleware = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  if (err.name === "TokenExpiredError") {
    return res.status(400).json({
      status: "Failed",
      message: "Token expired! please generate new token",
    });
  }
  if (err.name === "JsonWebTokenError") {
    return res
      .status(401)
      .json({ status: "Failed", message: "Authentication error" });
  }
  return res
    .status(statusCode)
    .json({ status: statusCode, message: err?.message });
};

export default ErrorHandlerMiddleware;
