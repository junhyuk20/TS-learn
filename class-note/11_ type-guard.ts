// 11.타입가드 단원
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

// 타입단언으로 tony의 타입을 Developer로 정의
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입가드 정의
//isDeveloper 함수에서 반환값을 설정하는 부분에서 is라는 키워드는 타입가드에서 사용되는 키워드 이다. (= 해석하면 반환되는 target의 타입이 Developer이냐?)
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined; // target이라는 인수를 Developer로 단언하고 Developer가 가지는 속성중 skill속성이 있으면 반환하겠다.
}

// 타입가드가 적용된 함수 isDeveloper의 반환값이 무엇이냐에 다라 어떤 속성이 보여지는지 적용하는 코드.
if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
