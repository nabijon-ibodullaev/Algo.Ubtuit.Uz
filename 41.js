function cons(x, y, z) {
  if (x < 1) {
    if (x < y && x < z) {
      console.log("x = ", (y + z) / 2);
    } else console.log(x);
  } else console.log(x);
  if (y < 1) {
    if (y < x && y < z) {
      console.log("y = ", (x + z) / 2);
    } else console.log(y);
  } else console.log(y);
  if (z < 1) {
    if (z < y && z < x) {
      console.log("z = ", (y + x) / 2);
    } else console.log(z);
  } else console.log(z);
}
cons(0.01, 1.11, 2.75);
