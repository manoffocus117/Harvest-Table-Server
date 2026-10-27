import { ObjectId } from "mongodb";
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
      try {
            const database = get_db();
            const menu_collection = database.collection("menu");

            const menu_item = req.body;
            const result = await menu_collection.insertOne(menu_item);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to add menu item",
                  error: error.message,
            });
      }
};

const update_menu_item = async (req, res) => {
      try {
            const menu_collection = get_db().collection("menu");
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const updated_item = {
                  $set: {
                        name: "",
                        recipe: "",
                        image: "",
                        category: "",
                        price: "",
                  },
            };

            const result = await menu_collection.updateOne(query, updated_item);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to update menu item",
                  error: error.message,
            });
      }
};

export { get_menu, add_menu_item, update_menu_item };
