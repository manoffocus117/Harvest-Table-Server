import express from "express";
import create_token from "../controllers/auth.controller.js";

const router = express.Router();

// Defines authentication endpoints
router.post("/get-token", create_token);

export default router;
