// shallow copy
const arr = [1, 2, 3, 4];

const arr2 = arr; // 참조만 복사

console.log(arr2);

arr2.pop(); // arr2에 변화는 arr에 변화와 동일
console.log(arr);

//  --------------------------------------

// deep copy
const ar = [1, 2, 3, 4];
const ar2 = ar.slice();

console.log("ar");
console.log(ar);
console.log("ar2");
console.log(ar2);

ar2.pop();

console.log("ar");
console.log(ar);
console.log("ar2");
console.log(ar2);
