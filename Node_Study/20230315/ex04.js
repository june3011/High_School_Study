// Restructuring assignment

function getRect() {
  return [10, 10, 100, 100];
}

const rect = getRect();
console.log(rect);

const [x, y, w, h] = getRect();
console.log(`${x}, ${y}, ${w}, ${h}`);

function getInfo() {
  return {
    name: "ABC",
    price: 1000,
  };
}

let { name, price } = getInfo();
console.log(name, price);

const user = {
  id: 123,
  name: "user",
  address: "korea",
};

function printId({ id }) {
  console.log(id);
}

printId(user);
