const data = {
  selection: [],
};

data.selection.push(1);
data.selection.push(5);
data.selection.push(3);
data.selection.push(2);
data.selection.push(2);

console.log(data.selection[0]);
console.log(data.selection[1]);
console.log(data.selection);

const data2 = {
  selection: {},
};

data2.selection[0] = 10;
data2.selection[1] = 50;
console.log(data2.selection[0]);
console.log(data2.selection[1]);
console.log(data2.selection);
