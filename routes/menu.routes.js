import express from "express";
import { get_menu } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", get_menu);

export default router;
