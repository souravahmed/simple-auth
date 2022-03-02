import { Response, NextFunction } from "express";
import JwtTokenHelper from "../helpers/token/jwtTokenHelper";
import RequestCustom from "../interfaces/requestCustom";

const AuthMiddleware = (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ status: "Failed", message: "Authentication error" });

  try {
    const decode = JwtTokenHelper.verifyAccessToken(token);
    req.currentUser = decode;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default AuthMiddleware;
