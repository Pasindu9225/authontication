import express from "express";
import {
  signin,
  logout,
  signup,
  verifyEmail,
  forgotpassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotpassword);

export default router;
