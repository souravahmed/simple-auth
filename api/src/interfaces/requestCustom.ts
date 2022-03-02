import { Request } from "express";

export default interface RequestCustom extends Request {
  currentUser?: any;
}
