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

app.get("/menu", async (req, res) => {
      try {
            const menu = await database.collection("menu").find().toArray();
            res.send(menu);
      } catch (error) {
            res.status(500).send({
                  message: "failed to get menu",
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
