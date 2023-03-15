// arr
const arr = [1, 2, 3, 4];
console.log(arr);

console.log(arr[0]); // index를 이용한 접근

arr.push(5); // 마지막에 항목 추가
console.log(arr);

arr.pop(); // 마지막 항목 삭제
console.log(arr);

const value = arr.splice(1, 2); // 1번 index부터 2개 삭제       // return 값으로 삭제된 것 리턴
console.log("removed: ", value);
console.log(arr);

// --------------------------------
