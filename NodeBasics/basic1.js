console.log('Node Basics Started...!!!');

var firstName = 'Sariya';
var lastName = 'Ansari';
var DOB = '20/07/1979';

var emp = {};
emp.firstName = firstName;
emp.lastName = lastName;
emp.dob = DOB;

function dispName(fName, lName) {
 console.log(fName + ' ' + lName);
}

function dispNameObj(emp) {
  console.log(emp.firstName + ' ' + emp.lastName + ' born in ' + emp.dob);
}

dispName(firstName, lastName);
dispNameObj(emp);

/** Another way to declare Obj*/
var student = {};
var address = 'addr';
student['className'] = '12th Std.'; // equal to student.className
student.studName = 'Tom Hanks';
student[address] = 'PMO Apartt.'
student.age = 20;

console.log('Name:' + student['studName']);
console.log('Class:' + student.className);
console.log('Address:' + student[address] );
console.log('Age:' + student.age);


//Another way to declare
var s = 'school';
var newObj = {
  name: 'Inaya',
  school: ' Serra'
};

console.log(newObj.name + ' ' + newObj.school);
console.log(newObj['name'] + ' ' + newObj[s]);
newObj.name = 'Inaya Sariya';
newObj.school = 'Serra International';
console.log(newObj.name + ' ' + newObj.school);
