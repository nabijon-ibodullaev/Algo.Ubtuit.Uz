function sikl(n) {
    S = 0;
    for (let i = 1; i <= n; i++) {
        S += Math.sin(i) / Math.pow(2, i);
    }
    return S;
}
let x = sikl(3)
console.log(x);