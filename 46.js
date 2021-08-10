function problemGraf(a) {
    if(a <= -1) {
        return 1/(a*a);
    }
    if(-1 < a && a <= 2) {
        return a*a;
    }
    if(a > 2) {
        return 4;
    }
}
x = problemGraf(0.74);
console.log(x);