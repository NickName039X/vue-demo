/**
 * 获取请求参数
 * @param key
 * @returns {*}
 */
function getRequestParameter(key){
    var params = getRequestParameters();
    return params[key];
}

/**
 * 获取请求参数列表
 * 适合非hash列表
 * @returns {{}}
 */
function getRequestParameters(){
    var arr = (location.search || "").replace(/^\?/,'').split("&");
    var params = {};
    for(var i=0; i<arr.length; i++){
        var data = arr[i].split("=");
        if(data.length == 2){
            params[data[0]] = data[1];
        }
    }
    return params;
}

/**
 * 获取hash参数
 */
function getHashParameter(key){
    var params = getHashParameters();
    return params[key];
}

function getHashParameters(){
    var arr = (location.hash || "").replace(/^\#/,'').split("&");
    var params = {};
    for(var i=0; i<arr.length; i++){
        var data = arr[i].split("=");
        if(data.length == 2){
             params[data[0]] = data[1];
        }
    }
    return params;
}

function getCookies(name){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        var result = unescape(arr[2]);
        result = result.replace(/^\"|\"$/g, "").replace(/\\\"/g, "\"");
        try{
            return JSON.parse(result);
        }
        catch(e){}
        return result;
    }
    else {
        return null;
    }
}


let params =  getRequestParameters();
let hashParams = getHashParameters();
console.log(params);
console.log(hashParams);