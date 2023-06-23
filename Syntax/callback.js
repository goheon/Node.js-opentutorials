/*function a() {
    console.log('A');
}
*/
var a = function () {
    console.log('A');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);

//익명 함수를 변수 a에 할당하고 slowfunc 함수의 파라미터에 a를 할당
//a()가 실행되는 형태로 콜백이라고 함