import stripe from "./../config/stripe.js";

const create_payment_intent = async (req, res) => {
      try {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            const paymentIntent = await stripe.paymentIntents.create({
                  amount: amount,
                  currency: "usd",
                  payment_method: ["card"],
            });

            res.send({
                  clientSecret: paymentIntent.client_secret,
            });
      } catch (error) {
            res.status(500).send({
                  message: "failed to create payment intent",
                  error: error.message,
            });
      }
};
export { create_payment_intent };
