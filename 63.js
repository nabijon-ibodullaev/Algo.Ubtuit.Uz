function sikl(n) {
    S = 0;
    for (let i = 1; i <= n; i++) {
        F = 1;
        for (let j = 1; j <= 2 * i - 1; j++) {
            F *= j;
            S += Math.pow(-1, (i - 1)) * 1 / F;
        }

    }
    return S;
}
let x = sikl(1)
console.log(x);