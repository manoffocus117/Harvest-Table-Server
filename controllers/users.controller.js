import { get_db } from "../config/database.js";
import { ObjectId } from "mongodb";

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
            const query = { email: user.email };
            const existing_user = await users_collection.findOne(query);
            if (existing_user) {
                  return res.send({
                        message: "user already existed",
                        insertedId: null,
                  });
            }
            const result = await users_collection.insertOne(user);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to add user",
                  error: error.message,
            });
      }
};

const delete_user = async (req, res) => {
      try {
            const database = get_db();
            const users_collection = database.collection("users");
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await users_collection.deleteOne(query);
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to delete user",
                  error: error.message,
            });
      }
};

export { get_users, add_user, delete_user };
