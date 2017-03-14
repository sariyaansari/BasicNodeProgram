
function createAdder(baseNumber) {
   return function (num) {
     return baseNumber + num;
   }
}
var addToBase = createAdder(10);
console.log(addToBase(2));
console.log(addToBase(4));
