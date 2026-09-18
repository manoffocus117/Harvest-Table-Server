import { get_db } from "../config/database.js";

const get_menu = async (req, res) => {
      try {
            const database = get_db();

            const menu_collection = database.collection("menu");

            const result = await menu_collection.find().toArray();

            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get menu",
                  error: error.message,
            });
      }
};

export { get_menu };
