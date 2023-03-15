// object reference
function op(obj) {
  obj.prop = "prop"; // add propperty
  console.log(obj);
}

let obj = {
  id: 1,
};

console.log(obj);
op(obj);
console.log(obj); // propperty prop added

// -----------------------------------------------------
function op2(array) {
  array.push(4);
  console.log(array); // 1, 2, 3, 4
}

let array = [1, 2, 3];
console.log(array);
op2(array);
console.log(array);
