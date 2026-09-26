import "dotenv/config";
import express from "express";
import cors from "cors";

import { connect_db } from "./config/database.js";

import menu_routes from "./routes/menu.routes.js";
import reviews_routes from "./routes/reviews.routes.js";
import cart_routers from "./routes/cart.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// database
await connect_db();

// home route
app.get("/", (req, res) => {
      res.send("server running");
});

// routes
app.use("/menu", menu_routes);
app.use("/reviews", reviews_routes);
app.use("/cart", cart_routers);

// local development
if (process.env.NODE_ENV !== "production") {
      app.listen(port, () => {
            console.log(`server is running on port ${port}`);
      });
}

export default app;
