function test() {
  if (true) {
    var a = 0;
  }
  console.log(a);
}

test();

console.log("-----------------------------------------------");

for (let i = 1; i < 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}