const { spawn } = require("child_process");

// const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

// var process = exec("dir");
var process = spawn("python", ["test.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
  console.error(data.toString());
}); // 실행 에러
