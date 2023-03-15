const arr = [1, 2];

// 인자가 2개 필요한 함수
function add(num1, num2) {
  return num1 + num2;
}

// spread
const result = add(...arr);
console.log(result);
