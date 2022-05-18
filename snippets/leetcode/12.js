/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let s = [];
    let arr1 = ['IV','XL','CD']
    let arr2 = ['IX','XC','CM']
    let arr3 = ['V','L','D']
    let arr4 = ['I','X','C','M']
    let base = 1;
    while(num > 0){
        let mod = num % 10**base;
        let p = 10**(base-1)
        if(mod === 4*p ){
            s.unshift(arr1[base-1])
            num = num - 4*p;
        }
        else if(mod === 9*p){
            s.unshift(arr2[base-1])
            num = num - 9*p;
        }
        else if(mod === 5*p){
            s.unshift(arr3[base-1])
            num = num - 5*p;
        }
        else if(mod != 0){
            s.unshift(arr4[base-1])
            num = num - 1*p;
        }
        if(mod === 0){
            base++;
        }
    }
    return s.join('')

};
intToRoman(3994)