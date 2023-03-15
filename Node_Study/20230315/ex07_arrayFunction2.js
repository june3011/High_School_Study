const arr = [1, 2, 3, 4, 5, 6];
const value = arr.find((i) => {
  if (i == 3) return true;
  else return false;
});
console.log(value);

// includes 주어진 값을 포함하면 true, 아니면 false

// forEach 배열의 모든 항목을 iteration함

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.includes(0));
arr2.forEach((v, i) => {
  console.log(`value: ${v}, index:${i}`);
});
