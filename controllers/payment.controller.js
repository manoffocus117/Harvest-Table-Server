import stripe from "./../config/stripe.js";

export const create_payment_intent = async (req, res) => {
      try {
            const { price } = req.body;
            const amount = Math.round(Number(price) * 100);

            if (!Number.isSafeInteger(amount) || amount <= 0) {
                  return res.status(400).json({
                        success: false,
                        message: "Invalid payment amount",
                  });
            }

            const paymentIntent = await stripe.paymentIntents.create({
                  amount: amount,
                  payment_method_types: ["card"],

                  mode: "payment",

                  line_items: [
                        {
                              price_data: {
                                    currency: "usd",

                                    product_data: {
                                          name: "Harvest Table Order",
                                    },

                                    unit_amount: amount,
                              },

                              quantity: 1,
                        },
                  ],
            });

            res.status(200).send({
                  success: true,
                  clientSecret: paymentIntent.client_secret,
            });
      } catch (error) {
            res.status(500).send({
                  success: false,
                  message: "Unable to start the payment.",
                  error: error.message,
            });
      }
};
