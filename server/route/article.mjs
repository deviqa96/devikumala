import express from "express";
import db from "../connection.mjs";
// import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the blog.
router.get("/blogs", async (req, res) => {
  let collection = await db.collection("article");
  let query = { type: "blog" };
  let results = await collection.find(query).sort({published_at : -1}).toArray();
  res.send(results).status(200);
  console.info(req)
});


// This section will help you get all blog by category
router.get("/blogs/:category", async (req, res) => {
  console.log(req.params)
  let collection = await db.collection("article");
  let query = { category: req.params.category , type:"blog"};
  let result = await collection.find(query).sort({published_at : -1}).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you get a list of all the portfolio.
router.get("/portfolios", async (req, res) => {
  let collection = await db.collection("article");
  let query = { type: "portofolio" };
  let results = await collection.find(query).sort({published_at : -1}).toArray();
  res.send(results).status(200);
  console.info(req)
});

// This section will help you get all potfolio by category
router.get("/portfolios/:category", async (req, res) => {
  let collection = await db.collection("article");
  let query = { "and": [{ category: req.params.category, type: "portofolio" }] };
  let result = await collection.find(query).sort({published_at : -1}).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("article");
  let query = { article_id: req.params.id };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


// This section will help you create a new record.
// router.post("/", async (req, res) => {
//   let newDocument = {
//     name: req.body.name,
//     position: req.body.position,
//     level: req.body.level,
//   };
//   let collection = await db.collection("records");
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

// This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const updates =  {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level
//     }
//   };

//   let collection = await db.collection("records");
//   let result = await collection.updateOne(query, updates);

//   res.send(result).status(200);
// });

// This section will help you delete a record
// router.delete("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };

//   const collection = db.collection("records");
//   let result = await collection.deleteOne(query);

//   res.send(result).status(200);
// });

export default router;