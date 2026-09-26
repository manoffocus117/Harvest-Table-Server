import express from "express";
import { add_to_cart, get_cart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", add_to_cart);
router.get("/", get_cart);

export default router;
