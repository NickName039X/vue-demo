/**
 * 返回文档在窗口左上角水平和垂直方向滚动的像素
 */
function getScrollOffset() {

    if (window.pageXOffset) {//ie9及以上支持该属性
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

/**
 * 获取窗口的高度与宽度(不包含工具条与滚动条)
 */
function getViewportOffset() {
    if (window.innerWidth) { // ie9及以上支持该属性
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            //怪异模式，混杂模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            //标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}


export {
    getScrollOffset,
    getViewportOffset
}

// toFixed兼容方法
Number.prototype.toFixed = function(n) {
    if (n > 20 || n < 0) {
        throw new RangeError('toFixed() digits argument must be between 0 and 20');
    }
    const number = this;
    console.log(number);
    if (isNaN(number) || number >= Math.pow(10, 21)) {
        return number.toString();
    }
    console.log(typeof n);
    if (typeof n == 'undefined' || n == 0) {
        return Math.round(number).toString();
    }

    let result = number.toString();
    const arr = result.split('.');

    // 整数的情况
    if (arr.length < 2) {
        result += '.';
        for (let i = 0; i < n; i += 1) {
            result += '0';
        }
        return result;
    }

    const integer = arr[0];
    const decimal = arr[1];
    if (decimal.length == n) {
        return result;
    }
    if (decimal.length < n) {
        for (let i = 0; i < n - decimal.length; i += 1) {
            result += '0';
        }
        return result;
    }
    result = integer + '.' + decimal.substr(0, n);
    const last = decimal.substr(n, 1);

    // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    if (parseInt(last, 10) >= 5) {
        const x = Math.pow(10, n);
        result = (Math.round(parseFloat(result) * x) + 1) / x; //正数负数通用
        result = result.toFixed(n);
    }

    return result;
};
//
(8716.425).toFixed(2); //
(-8716.425).toFixed(2); //负数前面记得加括号

