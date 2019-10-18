
function user(){
	this.a = 1;
    this.b = 2;
    console.log(this);
	return {x:12};
}
var a = new user();
console.log(a);


function user2(){
	this.a = 1;
	this.b = 2;
	return {key:this}
}
var a = new user2();
console.log(a);