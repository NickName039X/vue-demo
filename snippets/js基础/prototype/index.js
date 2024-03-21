


function Student(props) {
	this.name = props.name || '匿名'; // 默认值为'匿名'
	this.grade = props.grade || 1; // 默认值为1

	function sayGood(){
		console.log('sayGood');
	}

	console.log('调用父类构造函数');
}

//在原型上定义方法
Student.prototype.hello = function () {
	console.log('Hello, ' + ' 小傻瓜');
};
//==========================================================


function PrimaryStudent(props) {
	Student.call(this, props); //call继承(可以实现多继承)
	this.grade = props.grade || 222;

	console.log('调用子类构造函数');
}

let stu = new Student('AAA','BBB');
console.log(stu);
PrimaryStudent.prototype = new Student('AAA','BBB');//缺点：调用2次父类构造函数, 子类的构造函数会代替原型上的那个父类构造函数

let ps = new PrimaryStudent({
	name:'xxxxx',
	grade:'yyyyy'
});

console.log(ps.hello());

// // 空函数F:
// function F(props) {
// 	// Student.call(this, props);
// }

// var foo = new F();

// F.prototype = Student.prototype;

// // console.log(F.prototype);
// // console.log(F.prototype.constructor);

// // 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
// PrimaryStudent.prototype = new F();

// // 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
// PrimaryStudent.prototype.constructor = PrimaryStudent;

// // 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
// PrimaryStudent.prototype.getGrade = function () {
// 	return this.grade;
// };

// // 创建xiaoming:
// var xiaoming = new PrimaryStudent({
// 	name: '小明',
// 	grade: 2
// });
// xiaoming.name; // '小明'
// xiaoming.grade; // 2

// console.log(xiaoming);


// // 验证原型:
// xiaoming.__proto__ === PrimaryStudent.prototype; // true
// xiaoming.__proto__.__proto__ === Student.prototype; // true

// // 验证继承关系:
// xiaoming instanceof PrimaryStudent; // true
// xiaoming instanceof Student; // true

// var fo = new F({
// 	name: '小明',
// 	grade: 2
// });



// //================================================
// function Parent(x,y){
// 	console.log(x)
// 	this.x = x;
// 	this.y = y;
// 	this.arr = [1,2,3];

// }
// Parent.prototype.say = function(){
// 	console.log('say')
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
// function Child(x,y){
// 	this.g = 90;
// 	Parent.call(this,x, y);
// }

// var c1 = new Child(100,101);
// var c2 = new Child();