// var [a, b] = { a: 1, b: 2 } //在前面加代码使这行代码不报错
// Object.prototype[Symbol.iterator] = function () {
//     return Object.values(this)[Symbol.iterator]
// }

var a = "\"{\\\"communicate_file\\\":[{\\\"id\\\":\\\"13e4fd744fd22d604dcbdd186463edff\\\",\\\"fileId\\\":\\\"b2ed92b7379740ea90b34c1cfa437f9b\\\",\\\"fileName\\\":\\\"广州市橘子有限公司信用评价.pdf\\\",\\\"filePath\\\":\\\"dmpupload\\\",\\\"fileSize\\\":\\\"32.37KB\\\",\\\"md5Code\\\":\\\"e72fe7153f27faaf1b9e275e0eb85a05\\\",\\\"name\\\":\\\"广州市橘子有限公司信用评价.pdf\\\"}]}\""
var b = JSON.parse(JSON.parse(a))
console.log(b.communicate_file);