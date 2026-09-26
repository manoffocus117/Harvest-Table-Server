import express from "express";
import { get_cart } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", get_cart);

export default router;
