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

export { get_users };
