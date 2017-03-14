console.log('Starting app.js');
var persist = require('node-persist');

persist.initSync();

// bankAccounts.name
// bankAccounts.username
// bankAccounts.password

persist.clearSync();

function createAccount(bankaccount) {
  var bankAccounts = persist.getItemSync('bankAccounts');

  if (typeof bankAccounts === 'undefined') {
    console.log("Accounts not defined, defining now...");
    bankAccounts = [];
  }

  bankAccounts.push(bankaccount);
  persist.setItemSync('bankAccounts', bankAccounts);

  return bankaccount;
}

function getAccount(name) {
 var bankAccounts = persist.getItemSync('bankAccounts');
 var foundAccount = {};
 bankAccounts.forEach(function (account) {
  //  console.log(account);
   if (account.name === name) {
     console.log('Matched');
     foundAccount = account;
   }
 });
 return foundAccount;
}

createAccount({name: 'Facebook', username:'Sariya', password: 'XXX'});
createAccount({name: 'Google', username:'Sariya', password: 'XXX'});
createAccount({name: 'MicroSoft', username:'Sariya', password: 'XXX'});
createAccount({name: 'Amazon', username:'Sariya', password: 'XXX'});
console.log(getAccount('Amazon'));
