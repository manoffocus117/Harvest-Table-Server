import { get_db } from "../config/database.js";

const get_users = async (req, res) => {
      try {
            const database = get_db();
            const users_collection = database.collection("users");
            const result = await users_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get users",
                  error: error.message,
            });
      }
};

const add_user = async (req, res) => {
      try {
            const database = get_db();
            const users_collection = database.collection("users");
            const user = req.body;
            const result = await users_collection.insertOne(user);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to add user",
                  error: error.message,
            });
      }
};

export { get_users, add_user };
