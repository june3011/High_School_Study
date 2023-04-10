const express = require("express");

const router = express.Router();

const users = [
  { id: 1, name: "A", email: "a@a.com" },
  { id: 2, name: "B", email: "b@b.com" },
  { id: 3, name: "C", email: "c@c.com" },
];

router.get("/", (req, res, next) => {
  res.render("users", { users });
});

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((user) => user.id == id);
  res.render("user", { user });
});
module.exports = router;
