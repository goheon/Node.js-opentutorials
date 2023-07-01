var members = ['1','2','3'];
console.log(members[1]); //배열
var i = 0;
while(i < members.length) {
    console.log(members[i]);
    i=i+1;
} //배열의 순회

var roles = {'a':'ㄱ','b':'ㄴ'};
console.log(roles.a); //객체
console.log(roles['a']); //키를 호출해서 값을 받음

for (var name in roles) {
    console.log(name, roles[name]); //key, value
} //객체의 순회