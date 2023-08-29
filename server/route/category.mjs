import express from "express";
import db from "../connection.mjs";
// import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the blog.
router.get("/", async (req, res) => {
  let collection = await db.collection("category");
  let results = await collection.find().toArray();
  res.send(results).status(200);
  console.info(req)
});


// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("category");
  let query = { article_id: req.params.id };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;