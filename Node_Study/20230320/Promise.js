function test(value) {
  return new Promise((resolve, reject) => {
    if (value >= 0) {
      resolve("ok");
    } else {
      reject("error");
    }
  });
}

test(1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function test2(value) {
  return new Promise((resolve, reject) => {
    console.log("test2 " + value);
    resolve("finished");
  });
}

function test3(value) {
  console.log(value);
}

test(1)
  .then((result) => test2(result))
  .then((result) => test3(result));
