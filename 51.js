function triangle(x ,y ) { 
    if( y <= Math.abs(x) && y >= (-1) && y <= (1) && y >= -2   ){
        return "YES";
    }
    else return " NO ";
}
t = triangle(0,0);
console.log(t);