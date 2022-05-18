let _ = require('lodash');
function debounce(){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout( function(){

    });
}

console.log(_.camelCase('Foo Bar'));
console.log(_.camelCase('--foo-bar--'));
console.log(_.capitalize('FRED'));
console.log(_.camelCase('_A--foo-bar--ball'));
console.log(_.camelCase('el-alert__closebtn'));


_.throttle(debounce,1000,{trailing:false})
