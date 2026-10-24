import express from "express";
import { add_menu_item, get_menu } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", get_menu);
router.post("/", add_menu_item);

export default router;
