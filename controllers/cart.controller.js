import { get_db } from "../config/database.js";

// add to cart
const add_to_cart = async (req, res) => {
      try {
            const database = get_db();
            const cart_collection = database.collection("cart");

            const cart_item = req.body;
            const result = await cart_collection.insertOne(cart_item);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to add to cart",
                  error: error.message,
            });
      }
};

// get all cart item
const get_cart = async (req, res) => {
      try {
            const database = get_db();
            const cart_collection = database.collection("cart");
            const email = req.query.email;
            const query = { email: email };
            const result = await cart_collection.find(query).toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get cart items",
                  error: error.message,
            });
      }
};

export { add_to_cart, get_cart };
