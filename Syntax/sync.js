var fs = require('fs');

/*
//readFilesync
console.log('A');
var result = fs.readFileSync('Syntax/sample.txt', 'utf-8');
console.log(result);
console.log(c);
*/

console.log('A');
fs.readFile('Syntax/sample.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log(c);
//비동기, 콜백
