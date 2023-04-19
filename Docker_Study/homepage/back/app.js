// express 모듈 가져오기
const express = require("express");
const cors = require("cors");

// Express 애플리케이션 생성
const app = express();

// 모든 도메인에서 접근 가능하도록 설정
app.use(cors());

// body parser 미들웨어 등록
app.use(express.json());

const { Board, sequelize } = require("./board");

// "/" 경로로 들어왔을 때 "Hello World!" 출력
app.get("/", function (req, res) {
  res.send("text");
});

app.get("/json", function (req, res) {
  res.json("json");
});

app.post("/freeboard/insert", (req, res) => {
  const { title, content, writer } = req.body;
  Board.create({
    title,
    content,
    writer,
  });
  res.send("insert 됨");
});

app.get("/freeboard/list", (req, res) => {
  res.json([
    { id: 1, title: "title" },
    { id: 2, title: "title2222" },
    { id: 3, title: "title3333" },
  ]);
});

// 서버 시작
app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
