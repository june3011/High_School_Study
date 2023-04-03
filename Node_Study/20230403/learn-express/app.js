const express = require("express");
const morgan = require("morgan");
const path = require("path");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 실제 기능 코드
app.use("/", indexRouter);
app.use("/users", userRouter);

app.use((req, res, next) => {
  console.log("존재하지 않는주소 입니다.");
  const error = new Error("존재하지 않는 주소입니다.");
  error.status = 404;
  next(error);
}); // 에러 전달

app.use((err, req, res) => {
  res.send(err.message);
}); // 에러 메세지 출력

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
