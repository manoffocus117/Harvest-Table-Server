import { get_db } from "../config/database.js";

// get all cart item
const get_cart = async (req, res) => {
      try {
            const database = get_db();
            const cart_collection = database.collection("cart");
            const result = await cart_collection.find().toArray();
            res.send(result);
      } catch (error) {}
};

export { get_cart };
