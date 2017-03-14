var persist = require('node-persist');
var args = require('yargs')
           .command('createAccount','Create bankAccount', function (yargs){
             yargs.options({
               name: {
                       demand: true,
                       alias: 'n',
                       description: 'your name of the account'
                     },
               accountName: {
                       demand: true,
                       alias: 'a',
                       description: 'your login name'
                     },
               accountPassword: {
                       demand: true,
                       alias: 'p',
                       description: 'your password'
                     }
             }).help('help');
           })
           .command('getAccount', 'get specific account', function (yargs) {
             yargs.option({
               name: {
                 demand: true,
                 alias: 'n',
                 description: 'your name to be find in storage'
               }
             }).help('help');
           })
           .help('help')
           .argv;

persist.initSync();
// persist.clearSync();

function isAvailable(accounts, name) {
  var found = false;
  accounts.forEach(function (acc) {
    if (acc.name === name) {
      found = true;
    }
  });
  return found;
}

function createAccount(bankAccount) {
  var bankAccounts = persist.getItemSync('bankAccounts');

  if ( typeof bankAccounts !== 'undefined' && isAvailable(bankAccounts, bankAccount.name) ) {
    console.log('Account already existing');
    return;
  }

  if (typeof bankAccounts === 'undefined') {
    bankAccounts = [];
  }

  bankAccounts.push(bankAccount);
  persist.setItemSync('bankAccounts', bankAccounts);

  return;
}

function getAccount(name) {
  var bankAccounts = persist.getItemSync('bankAccounts');
  var foundAccount;
  bankAccounts.forEach(function (account) {
    if (account.name === name) {
      foundAccount = account;
    }
  });
  return foundAccount;
}


var commandName = args._[0];
if (commandName === 'createAccount' &&
    typeof args.name !== 'undefined' &&
    typeof args.accountName !== 'undefined' &&
    typeof args.accountPassword !== 'undefined')
{
  createAccount({
                 name: args.name,
                 accountName: args.accountName,
                 accountPassword: args.accountPassword
               });
} else if (commandName === 'getAccount' &&
            typeof args.name !== 'undefined') {
   var result = getAccount('Facebook');
   console.log(result);
}
