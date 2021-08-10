function problem(x , y) {
    if(x < 0 && y < 0) {
        console.log("x = " , Math.abs(x) , " y = " , Math.abs(y));  
    }
    if(x < 0 || y < 0) {
     console.log("x = " , 0.5 + x , " y = " , y = 0.5 + y); 
    }
    if( x > 0 && y > 0) {
       console.log( "x = " , x , "y = " , y );
    }
}
problem(2.85 , 11.95);