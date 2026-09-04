import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
      res.send("server running");
});

app.listen(port, () => {
      console.log(`Server in running on port: ${port}`);
});
