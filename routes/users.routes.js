import express from "express";
import {
      add_user,
      delete_user,
      get_users,
} from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", get_users);
router.post("/", add_user);
router.delete("/:id", delete_user);

export default router;
