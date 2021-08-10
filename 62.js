function sikl(n) {
    S = 0;
    A = 0;
    for (let i = 0; i <= 0; i = i + 2) {
        S += (Math.sin(Math.pow(n, i))) / Math.pow(2, i);
    }
    for (let i = 1; i <= 0; i = i + 2) {
        A += (Math.sin(Math.pow(n, i))) / Math.pow(2, i);
    }
    let B = S - A;
    return B;
}
console.log(sikl(2));