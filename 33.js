function Max(x, y, z) {
  return Math.max(x + y + z, x, y, z);
}
function Min(x, y, z) {
  return Math.pow(Math.min((x + y) / 2, x, y, z), 2);
}
let max = Max(0, -4, -1);
let min = Min(0, -4, -1);
console.log(max);
console.log(min);
