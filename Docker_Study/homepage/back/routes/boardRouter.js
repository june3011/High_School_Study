const express = require("express");
const router = express.Router();

const { Board, sequelize } = require("../board");

router.post("/insert", (req, res) => {
  const { title, content, writer } = req.body;
  Board.create({
    title,
    content,
    writer,
  });
  res.send("insert 됨");
});

router.get("/list", async (req, res) => {
  // select * from boards;
  const boards = await Board.findAll({
    limit: 5,
    where: [{ title: { [Op.like]: "%qw%" } }],
  });
  console.log(boards);
  res.json(boards);

  // res.json([
  //   { id: 1, title: "title" },
  //   { id: 2, title: "title2222" },
  //   { id: 3, title: "title3333" },
  // ]);
});

module.exports = router;
