let dateEnd = new Date('2019-10-18 18:00:59');
let dateStart = new Date('2019-10-17 6:10:10');
let datediff = dateEnd.getTime() - dateStart.getTime();
let leave = datediff % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000);
let seconds = Math.round(leave / 1000);

console.log(seconds);

function timeFn(d1) {//di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
    var dateEnd = new Date();//获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
    console.log(dateDiff + "时间差的毫秒数", dayDiff + "计算出相差天数", leave1 + "计算天数后剩余的毫秒数"
        , hours + "计算出小时数", minutes + "计算相差分钟数", seconds + "计算相差秒数");
}
var t3 = "2017-08-18 04:56:38";
timeFn(t3);





//不成熟的计算月、年:
//这里的dayDiff就是上文计算出的天数差
let monthDiff = Math.floor(dayDiff / 30);//以30天为一个月不够精准严谨
//获取相差的月份
if (monthDiff < 12) {
    timeThis = monthDiff + "个月前发布";//获取相差的月份
}
let yearDiff = Math.floor(monthDiff / 12);//获取相差的年份
if (yearDiff >= 1) {
    timeThis = yearDiff + "年前发布";
}


//获取当前月份的天数
function getDays() {
    //构造当前日期对象
    var date = new Date();
    var year = date.getFullYear();//获取年份
    var mouth = date.getMonth() + 1;//获取当前月份
    var days;//定义当月的天数；
    if (mouth == 2) {//当月份为二月时，根据闰年还是非闰年判断天数 闰年多一天
        days = year % 4 == 0 ? 29 : 28;
    }
    else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
        //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
        days = 31;
    }
    else {
        //其他月份，天数为：30.
        days = 30;
    }
    return days;
}

const date =  new Date();
let string = JSON.stringify(date);
console.log(string);

// After: JSON.stringify keeps date as-is!
Date.prototype.toJSON = function(){
    const hoursDiff = this.getHours() - this.getTimezoneOffset() / 60;
    this.setHours(hoursDiff);
    return this.toISOString();
};
string = JSON.stringify(date);
console.log(string);


const date =  new Date();

// After: JSON.stringify keeps date as-is!
Date.prototype.toJSON = function(){
    const hoursDiff = this.getHours() - this.getTimezoneOffset() / 60;
    this.setHours(hoursDiff);
    return this.toISOString();
};
let string = JSON.stringify(date);
console.log(string);



