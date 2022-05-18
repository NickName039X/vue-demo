function test(a,b){
    console.log(a);
    arguments[1]=22;
    console.log(b);
    function a(){

    }
}
test(10,2);

var obj = {
    a:10,
    say: function () {
        setTimeout(() => {
            console.log(this.a)
        });
    }
}
obj.say(); // obj

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,
    get(){
        return 84;
    }
});

object1.getter;
