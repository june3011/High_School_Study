// Restructuring assignment
const arr = ["a", "b"];

let [value, value2] = arr;
console.log(value, value2);

const arr2 = ["a", "b", "c", "d"];
let [v1, v2, ...restValue] = arr2;
console.log(v1);
console.log(v2);
console.log(restValue);
``;
