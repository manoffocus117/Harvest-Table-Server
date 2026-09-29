import express from "express";
import {
      add_to_cart,
      delete_cart_item,
      get_cart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", add_to_cart);
router.get("/", get_cart);
router.delete("/:id", delete_cart_item);

export default router;
