function Change(a, b) {
  if (a <= b) {
    return (a = 0);
  } else return a;
}
let change = Change(3, -9);
console.log(change);
