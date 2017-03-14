console.log('Starting password manager app.js');
var persistent = require('node-persist');

var accounts = [];

//init node-persist
persistent.initSync();

//store permanently in persistent store
// persistent.setItemSync('name', 'Sariya');
// console.log('keyval pair stored in persistent');

//get item from persistent
var item = persistent.getItemSync('name');

console.log(item);

accounts.push([{username:'Faisal', balance:10}]);

persistent.setItemSync('accounts', [{username: 'Ansari', balance: 0}]);
console.log('keyval pair stored in persistent');

var acc = persistent.getItemSync('accounts');
console.log(acc);

console.log(accounts.length);
