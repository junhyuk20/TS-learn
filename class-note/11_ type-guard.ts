interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

var tony = introduce();
console.log(tony.skill); // 유니온 타입에서는 공통된 속성만 뽑아 올 수 있다는거 명심, 현재 그래서 에러가 나는 거임!

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}
