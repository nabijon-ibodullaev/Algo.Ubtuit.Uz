function Test(a, b, c) {
  if (c <= b && b <= a) {
    console.log(2 * a, " ", 2 * b, " ", 2 * c);
  } else
    console.log(
      " ",
      Math.abs(a * 2),
      " ",
      Math.abs(b * 2),
      " ",
      Math.abs(2 * c)
    );
}
Test(0, 10, 100);
