function triangle(x ,y ) {
    if( y<= (3 *x +2) && y <= (-3*x + 2) && y >= -1 ){
        return "YES";
    }
    else return " NO ";
}
t = triangle(-0.48 , 0.07);
console.log(t);