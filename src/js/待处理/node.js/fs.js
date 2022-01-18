let fs = require('js/fs');

const test = require('./path.js');
console.log(test);

fs.readFile('./path.js',function(err,data){
   console.log(err,data);
});


