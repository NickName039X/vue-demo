//原型继承
function Student(name,grade) {
	var area = 'hunan';
	this.name = name || '匿名'; // 默认值为'匿名'
	this.grade = grade || 1; // 默认值为1
}
Student.prototype.sex = 'man';

// 空函数F:
function F(props) {
}

console.log(F.prototype);

F.prototype = new Student('ming');

// F.prototype = Student.prototype;

var stu = new Student('ming',25);

var foo = new F('kk');
