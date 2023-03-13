function* gen() {
  yield 0;
  yield 1;
  yield 2;
}

const g = gen();
console.log(g.next().value);
console.log(g);
console.log(g.next().value);
console.log(g);
console.log(g.next().value);
console.log(g.next());
console.log(g.next());
