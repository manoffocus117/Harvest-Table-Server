import express from "express";
import {
      add_menu_item,
      get_menu,
      update_menu_item,
} from "../controllers/menu.controller.js";
import verify_token from "./../middlewares/verify_token.middleware.js";
import verify_admin from "./../middlewares/verify_admin.middleware.js";

const router = express.Router();

router.get("/", get_menu);
router.post("/", verify_token, verify_admin, add_menu_item);
router.patch("/", verify_token, verify_admin, update_menu_item);

export default router;
