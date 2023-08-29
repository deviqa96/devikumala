import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import article from "./route/article.mjs";
import category from "./route/category.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/article", article);
app.use("/category", category);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});