function name1(a) {
    if( a <= 1) {
        return Math.abs(a);
    }
    if(1 < a && a <= 2) {
            return 1;
    }
    if(2 < a) {
        return -2*a + 5;
    }

}
x = name1(6.03);
console.log(x);