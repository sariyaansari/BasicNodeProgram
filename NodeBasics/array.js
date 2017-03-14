var grades = [10, 20, 30];
var totalGrade = 0;

function printGrades(item) {
  console.log(item);
}

function processItemCallback(item) {
  totalGrade += item;
}

grades.forEach(processItemCallback);



console.log('Total: ' + totalGrade + ' length: ' + grades.length );
console.log('Avg: ' + totalGrade/grades.length);

grades.push(40);
grades.push(50);
grades.unshift(5);
console.log('Print grade array:');
grades.forEach(printGrades);

console.log('Pop last item from array: ' + grades.pop());

console.log('Print grade array:');
grades.forEach(printGrades);

console.log('Pop first item from array: ' + grades.shift());

console.log('Print grade array:');
grades.forEach(printGrades);
