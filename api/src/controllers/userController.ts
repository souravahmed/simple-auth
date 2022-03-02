import { Request, Response, NextFunction } from "express";
import JwtTokenHelper from "../helpers/token/jwtTokenHelper";
import RequestCustom from "../interfaces/requestCustom";
import UserService from "../services/userService";

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userName, password } = req.body;
  if (!userName || !password)
    return res
      .status(400)
      .json({ status: "Failed", message: "Authentication error" });

  try {
    const user = UserService.getUserByUserName(userName);
    if (!user || user.password != password)
      return res
        .status(400)
        .json({ status: "Failed", message: "Authentication error" });
    const token = JwtTokenHelper.generateToken(user.userName);
    const { password: userPassword, ...rest } = user;
    return res.status(200).json({ ...rest, token });
  } catch (error) {
    return next(error);
  }
};

export const getUserData = (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    const userDetails = UserService.getUserByUserName(req?.currentUser?.user);
    const { password: userPassword, ...rest } = userDetails;
    return res.status(200).json({ ...rest });
  } catch (error) {
    return next(error);
  }
};
