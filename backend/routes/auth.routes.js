import express from "express";
import {
  signin,
  logout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;
