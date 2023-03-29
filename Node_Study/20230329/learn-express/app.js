const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

// ----- 미들웨어
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
// 주소를 보고 public 폴더에 있는 사진이면 코드가 아래쪽으로 더 이상 내려가지 않고 즉시 리턴
// 성능 향상?
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// .urlencoded()은 x-www-form-urlencoded형태의 데이터를
// .json()은 JSON형태의 데이터를 해석해줍니다.
// ----------------

// app.use((req, res, next) => {
//   console.log("모든 요청이 지나갑니다.");
//   next();
// });

// 실제 기능 코드
// 주소가 안 맞거나 메소드가 안 맞으면 통과됨
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

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
