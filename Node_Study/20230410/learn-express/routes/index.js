const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    res.locals.value = 3;
    res.locals.array = [
      { id: 1, title: "a" },
      { id: 2, title: "b" },
      { id: 3, title: "c" },
      { id: 4, title: "d" },
    ];
    res.render("index", { value: "ID", name: "USER" });
  })
  .post((req, res, next) => {
    res.send("Hello users");
  })
  .put((req, res, next) => {
    res.send("Hello users");
  });

module.exports = router;
