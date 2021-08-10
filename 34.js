function Test(a, b, c) {
  if (a < b && b < c) {
    return "Yes";
  } else return "NO";
}
let test = Test(0, 1, 5);
console.log(test);
