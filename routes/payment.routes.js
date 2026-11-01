import express from "express";

import { create_payment_intent } from "../controllers/payment.controller.js";
import verify_token from "../middlewares/verify_token.middleware.js";

const router = express.Router();

router.post("/intent", verify_token, create_payment_intent);

export default router;
