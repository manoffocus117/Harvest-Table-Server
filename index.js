import "dotenv/config";
import express from "express";
import cors from "cors";

// remember, import local files with extension
import { connect_db, get_db } from "./config/database.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// database connection
await connect_db();
const database = get_db();

app.get("/", (req, res) => {
      res.send("server running");
});

// menu api
app.get("/menu", async (req, res) => {
      try {
            // menu collection
            const menu_collection = await database.collection("menu");

            const result = await menu_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get menu",
                  error: error.message,
            });
      }
});

// reviews api
app.get("/reviews", async (req, res) => {
      try {
            // reviews collection
            const reviews_collection = await database.collection("reviews");

            const result = await reviews_collection.find().toArray();
            res.send(result);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get reviews",
                  error: error.message,
            });
      }
});
// Only listen locally — Vercel invokes the exported app per-request instead
if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
            console.log(`server is running on port ${port}`);
      });
}

export default app;
