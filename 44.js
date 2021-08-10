function triangle(x , y , z) {
    if((x + y) > z && x < (y + z) && y < (z+x)){
        return "YES";
    }
    else return "NO";
}
x = triangle(1 , 8 , 7);
console.log(x);