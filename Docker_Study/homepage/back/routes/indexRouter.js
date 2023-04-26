const express = require("express");
const router = express.Router();

// "/" 경로로 들어왔을 때 "Hello World!" 출력
router.get("/", function (req, res) {
  res.send("text");
});

router.get("/json", function (req, res) {
  res.json("json");
});

module.exports = router;
