import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const create_payment_intent = async (req, res) => {
      try {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            const payment_intent = await stripe.paymentIntents.create({
                  amount,
                  currency: "usd",
                  payment_method_types: ["card"],
            });

            res.status(200).send({
                  client_secret: payment_intent.client_secret,
            });
      } catch (error) {
            res.status(500).send({
                  message: "failed to create payment intent",
                  error: error.message,
            });
      }
};
export { create_payment_intent };
