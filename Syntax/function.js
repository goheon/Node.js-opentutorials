function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
}

f123();

console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

function sum(first,second){ //parameter
    console.log('a');
    return first+second;
    console.log('b'); //return 뒤에서 출력 안됨
}

console.log(sum(2,4)); // argument
