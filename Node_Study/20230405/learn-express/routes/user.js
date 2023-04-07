const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const query = req.query;
  console.log(query);
  res.send(`Hello ${id}`);
});

module.exports = router;
