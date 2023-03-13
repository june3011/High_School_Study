function f1() {}

console.log(f1);
console.log(f1());

const f2 = function () {};
console.log(f2);

const f3 = () => {};
console.log(f3);

const obj = {
  id: 1,
  1: 10,
};
obj.name = "objname";
console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj["id"]);
console.log(obj[1]);

let obj1 = {
  id: 1,
};
console.log(obj1);

obj1.value = "value";
console.log(obj1);

delete obj1.value;
console.log(obj1);

const obj2 = {};
const str2 = "a";
function f() {}

console.log(typeof obj2);
console.log(typeof str2);
console.log(typeof f);
console.log(typeof Object.getPrototypeOf(str2));
console.log(typeof Object.getPrototypeOf(obj2));
console.log(typeof Object.getPrototypeOf(f));
