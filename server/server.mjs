import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import article from "./route/article.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/article", article);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});