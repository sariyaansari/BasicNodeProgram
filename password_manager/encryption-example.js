var crypto = require('crypto-js');

var message = 'This is a man who lives in lucknow';
var key = 'abc123';

//Encrypt
var encryptedMsg = crypto.AES.encrypt(message, key);
console.log(encryptedMsg);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMsg, key);
var decryptedMsg = bytes.toString(crypto.enc.Utf8);
console.log(decryptedMsg);
