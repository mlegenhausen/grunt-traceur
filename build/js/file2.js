var $__toObject = function(value) {
  if (value == null) throw TypeError();
  return Object(value);
};
var vals = [1, 2, 3, 4];
addFour.apply(null, $__toObject(vals));
function addFour(a, b, c, d) {
  console.log(a + b + c + d);
}
