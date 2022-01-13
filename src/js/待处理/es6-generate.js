// genatator语法
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator(); 
while(hw.next()){
    console.log(hw.next().value)
}

