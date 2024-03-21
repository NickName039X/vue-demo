var a = {
    value: 0,
    valueOf: function () {
        console.log(this);
        this.value++;
        return this.value;
    }
}
console.log(a == 1 && a == 2);
