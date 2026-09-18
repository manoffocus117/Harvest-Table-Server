import { get_db } from "../config/database.js";

const get_reviews = async (req, res) => {
      try {
            const database = get_db();

            const reviews_collection = database.collection("reviews");

            const result = await reviews_collection.find().toArray();

            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get reviews",
                  error: error.message,
            });
      }
};

export { get_reviews };
