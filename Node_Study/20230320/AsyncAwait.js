function test(value) {
  return new Promise((resolve, reject) => {
    resolve("ok");
  });
}

async function runTest() {
  const result = await test(1);
  console.log(result);
}

runTest();
