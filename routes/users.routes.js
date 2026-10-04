import express from "express";
import {
      get_users,
      add_user,
      make_admin,
      delete_user,
      get_admin,
} from "../controllers/users.controller.js";
import verify_token from "../middlewares/verify_token.middleware.js";
import verify_admin from "../middlewares/verify_admin.middleware.js";
const router = express.Router();

router.get("/", verify_token, verify_admin, get_users);
router.post("/", add_user);
router.patch("/:id", make_admin);
router.get("/admin/:email", verify_token, get_admin);
router.delete("/:id", delete_user);

export default router;
