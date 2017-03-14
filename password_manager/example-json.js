var person = { name: 'Sariya', age: 24};

var str = JSON.stringify(person);
console.log(str + ' typeof:' + typeof str);

var jsonObj = JSON.parse(str);
console.log(jsonObj + ' typeof:' + typeof jsonObj);

var animal = '{"name": "Halley"}';
console.log(animal + ' typeof:' + typeof animal);

var animalObj = JSON.parse(animal);
animalObj.age = 10;
console.log(animalObj + ' typeof:' + typeof animalObj);

animal = JSON.stringify(animalObj);
console.log(animal + ' typeof:' + typeof animal);
