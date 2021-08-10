function Summa(n) {
  let S = 0;
  for (let i = 1; i <= n; i++) {
    S += i;
  }
  return S;
}
let s = Summa(4);
console.log(s);
