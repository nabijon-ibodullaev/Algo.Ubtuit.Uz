function square(a , b , c) {
    if( 0 <= (b*b - 4*a*c) ) { 
        return {
            "X1 = " : (-b + Math.sqrt(b*b-4*a*c))/(2*a) ,
            "X2 = " : (-b - Math.sqrt(b*b-4*a*c))/(2*a)
        }
        }
    else return "NO";
}
x = square(3 , 4 , 1);
console.log(x);