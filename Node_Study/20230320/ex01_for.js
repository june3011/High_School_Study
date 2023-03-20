const arr = [1, 3, 5, 7, 9];

//ES6 for in - 주의
console.log("for in");
for (let i in arr) {
  console.log(i + 0);
}

console.log("for of");
for (let i of arr) {
  console.log(i + 0);
}
