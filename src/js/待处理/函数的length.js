console.log((function(a,b){}.length))
console.log((function(a,b=5){}.length))
console.log((function(a=1,b=5){}.length))
console.log((function(...args){}.length))

function abc(x,y,z){
    console.log(x,y,z);
}
abc(...[10,,3]);//利用了数组松散的特性
