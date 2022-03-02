import express, { Router } from "express";
import { getUserData, userLogin } from "../../controllers/userController";
import AuthMiddleware from "../../middlewares/authMiddleware";

const router: Router = express.Router();

router.route("/login").post(userLogin);
router.route("/userData").get(AuthMiddleware, getUserData);

export default router;
