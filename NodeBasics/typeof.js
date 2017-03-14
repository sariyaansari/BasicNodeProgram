var name = undefined;

if (name === undefined) {
  console.log('name variable is NULL');
}

if (typeof name === 'undefined') {
  console.log('name variable is NULL...');
} else {
  console.log(name);
}

if (typeof x === 'undefined') {
  console.log('x variable is not declared');
}

var myresult = false;

if (typeof myresult === 'boolean') {
  myresult = !myresult;
}
console.log('boolean val changed: ' + myresult);
