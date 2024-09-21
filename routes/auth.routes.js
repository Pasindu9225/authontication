import express from "express";
import {
  signin,
  logout,
  signup,
  verifyEmail,
  forgotpassword,
  resetpassword,
  checkAuth,
} from "../controllers/auth.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotpassword);
router.post("/reset-password/:token", resetpassword);

export default router;
