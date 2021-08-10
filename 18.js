function Summ(x, y) {
  return (
    (1 / (x + 2 / Math.pow(x, 2) + 3 / Math.pow(x, 3)) +
      (Math.E, x * x + 3 * x)) /
      (Math.atan(x + y) + Math.pow(Math.abs(5 + x * x))) -
    Math.pow(Math.cos(y * y + (x * x) / 2), 2)
  );
}
let F2 = Summ(3.19, 4.75);
console.log(F2);
