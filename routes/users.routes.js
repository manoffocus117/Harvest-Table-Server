import express from "express";
import { get_users } from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", get_users);

export default router;
