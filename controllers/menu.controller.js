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

const add_menu_item = async (req, res) => {
      console.log(req.body);
      try {
            const database = get_db();
            const menu_collection = database.collection("menu");

            const menu_item = req.body;
            const result = await menu_collection.insertOne(menu_item);
            res.send(result);
      } catch (error) {}
};

export { get_menu, add_menu_item };
