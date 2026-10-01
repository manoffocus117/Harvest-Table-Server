import express from "express";
import { add_user, get_users } from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", get_users);
router.post("/", add_user);

export default router;
