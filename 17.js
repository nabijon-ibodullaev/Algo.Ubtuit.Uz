function Summ(x, y) {
  return (
    (2 * Math.tan(x + Math.PI / 6)) /
      (1 / 3 + Math.pow(Math.cos(y + x * x), 2)) +
    Math.log2(x * x + 2)
  );
}
let F1 = Summ(0.22, 6.17);
console.log(F1);
