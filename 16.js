function Summ(x, y) {
  return (
    (x + y) / (y * y + Math.abs((y * y + 2) / (x + (x * x * x) / 5))) +
    Math.pow(Math.E, y + 2)
  );
}
let Cl = Summ(9.79, 6.74);
console.log(Cl);
