// 我们的 JavaScript 代码将写在这里
/*
    三要素：场景，相机，渲染器
    PerspectiveCamera：透视相机
*/

var scene = new THREE.Scene(); //创建场景
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 4, 1000); //创建相机
var asdsa = new THREE.OrthographicCamera()

//创建场景
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

/*
    第三：创建一个网格对象：指定一个几何体以及一个应用到几何体上的材质
*/
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;



/*
    节流
*/
var throttle = function (func, delay) {
    var timer = null;
    var startTime = Date.now();
    return function () {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    }
}

renderer.render(scene, camera);

// function animate () {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0.1;
//     renderer.render(scene, camera);
// }
// throttle(animate, 1000)();
// animate();