//array, object

//자바스크립트에서 함수는 변수에 담길 수 있음
//배열의 원소로도 담을 수 있음

var f = function(){
    console.log(1+1);
}

var a = [f];
a[0]();

var o = {
    func:f
};
o.func();