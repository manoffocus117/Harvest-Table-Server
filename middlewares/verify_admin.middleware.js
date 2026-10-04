import jwt from "jsonwebtoken";
import { get_db } from "../config/database.js";

// use verify admin after verify token
const verify_admin = async (req, res, next) => {
      const database = get_db();
      const users_collection = database.collection("users");
      const email = req.decoded.email;
      const query = { email: email };
      const user = await users_collection.findOne(query);
      const is_admin = user?.role === "admin";
      if (!is_admin) {
            return res.status(403).send({ message: "forbidden access" });
      }
      next();
};

export default verify_admin;
