import express from "express";
import { get_reviews } from "../controllers/reviews.controller.js";

const router = express.Router();

router.get("/", get_reviews);

export default router;
