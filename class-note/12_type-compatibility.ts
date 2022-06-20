//👉 인터페이스 타입호환 : 타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미합니다. 예를 들면 아래와 같은 코드를 의미합니다.

/*👓 타입호환 인터페이스, 클래스 일때 예제*/
interface Developer11 {
  name: string;
  skill: string;
}

// interface Person11 {
//   name: string;
// }

class Person11 {
  name: string;
}
let developer11: Developer11;
let person11: Person11;

//developer11 = Person11;        (인터페이스 일때) 대입을 받는 쪽의 필요속성 갯수를 맞춰 주어야 되는데, person11은 하나밖에 없으므로 호환이 안된다.
developer11 = new Person11(); // (클래스 일때) 대입을 받는 쪽의 필요속성 갯수를 맞춰 주어야 되는데, person11은 하나밖에 없으므로 호환이 안된다.

person11 = developer11; // 반대로 대입하는 쪽의 갯수가 많고 받는 쪽이 적으면 타입 호환가능하다. 왜? developer11가 person11에 필요한 모든 걸 가지고 있으니깐

/************************************************************************************************************************************************************************************************** */

//👓 함수, 제네릭 예제

// 함수
var add = function (a: number) {
  //console.log(a);
};
var sum = function (a: number, b: number) {
  //return a + b;
};

sum = add; // 대입을 받는 왼쪽 기준으로 필요한 파라메터 갯수보다 저 적게 들어 올때는 타입 호환이 가능
add = sum; // 대입을 받는 왼쪽 기준으로 필요한 파라메터 갯수보다 더 많이 들어 올때는 타입호환이 불가능

//👓 제네릭

interface Empty<T> {} // 아무 속성도 정의 해주지 않았을 때

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;

// 속성을 정의 했을 때
interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
