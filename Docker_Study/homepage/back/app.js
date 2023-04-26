// express 모듈 가져오기
const express = require("express");
const cors = require("cors");

// Express 애플리케이션 생성
const app = express();

// 모든 도메인에서 접근 가능하도록 설정
app.use(cors());

// body parser 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
const boardRouter = require("./routes/boardRouter");

app.use("/", indexRouter);
app.use("/freeboard", boardRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "요청되는 주소는 없습니다",
  });
});

// 서버 시작
app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
