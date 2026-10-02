import express from "express";
import {
      get_users,
      add_user,
      make_admin,
      delete_user,
} from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", get_users);
router.post("/", add_user);
router.patch("/:id", make_admin);
router.delete("/:id", delete_user);

export default router;
