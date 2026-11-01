import Stripe from "stripe";
import { get_db } from "../config/database.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const create_payment_intent = async (req, res) => {
      try {
      } catch (error) {
            res.status(500).send({
                  message: "failed to create payment intent",
                  error: error.message,
            });
      }
};

export { create_payment_intent };
