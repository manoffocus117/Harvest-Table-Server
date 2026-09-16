import "dotenv/config";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

let database;

const connect_db = async () => {
      try {
            await client.connect();
            database = client.db("harvest_table_db");
            console.log("mongodb connected");
      } catch (error) {
            console.error("mongodb connection failed :", error);
      }
};

const get_db = () => {
      if (!database) {
            throw new Error("database is not connected");
      }
      return database;
};

export { connect_db, get_db };
