// map
const ar = [1, 2, 3];
const ar2 = ar.map((item) => {
  return `${item}th`;
});
console.log(ar2);

// filter
const ra = [1, 2, 3, 4, 5, 6];
const ra2 = ra.filter((i) => {
  if (i % 2 == 0) return true;
  else return false;
});
console.log(ra2);
