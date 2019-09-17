let foo = 1

setTimeout(()=>{
    foo=2;
    console.log('nav=========>',foo);
    exports= foo
},1000);
console.log('nav=======>',foo);
exports=foo;

// let bar = 'Jay';
// bar = 'Sms';
// console.log(bar);
