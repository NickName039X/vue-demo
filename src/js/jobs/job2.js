function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}

Foo.getName = function() {
    console.log(2);
};

Foo.prototype.getName = function() {
    console.log(3);
};

var getName = function() {
    console.log(4);
};

function getName() {
    console.log(5);
}

Foo.getName(); // 2
getName(); // //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2
new Foo().getName(); //3
new new Foo().getName(); //3


function Person(ban){
    this.ban = ban;

    return {
        name:'xiaogang'
    };
}
var new2 = function(func){
    var o = Object.create(func.prototype)
    var k = func.call(o);
    console.log(k)
    if(k && typeof k === 'object'){
        return k;
    }else{
        return o;
    }

}

var c = new2(Person);
