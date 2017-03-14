var args = require('yargs')
  .command('hello','Greet User', function (yargs){
    yargs.option({
      name: {
              demand: true,
              alias: 'n',
              description: 'your first name goes here'
            },
      lastname: {
                  demand: true,
                  alias: 'l',
                  description: 'your last name'
                }
    }).help('help');
  })
  .help('help')
  .argv;
var command = args._[0];
// var param = args.argv;

// console.log(param)

// if (command === 'hello') {
//   console.log(command + ' ' + args.name);
// } else {
//   console.log('Invalid param passed');
// }

if (command === 'hello' && typeof args.name !== 'undefined' &&
    typeof args.lastname != 'undefined') {
  console.log(command + ' passed with input ' + args.name + ' and ' + args.lastname);
} else if (command === 'hello') {
  console.log('Only command ' + command + ' passed');
} else {
  console.log('Invalid command passed ');
}
