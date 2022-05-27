/* 타입추론 기본1 */

// TS에서 아래와 같이 선언을하게 되면, 기본적으로 a라는 변수의 타입은 string이다. 라고 추론을 합니다.
var a = "string";

// 마찬가지로 아래와 같이 선언을 한다면 TS는 getB함수의 인수및 반환타입이 무엇인지 모르기 때문에 any 라는 타입을 추론하게 됩니다.
function getB(b) {
  return b;
}

/*
아래의 선언은 ES6문법인 함수의 기본값 설정을 적용한 예제입니다. 즉 getC함수에 아무런 인수가 들어오지 않았을 때 이함수는 default로 숫자 10을 받겠다 라는 의미 입니다. 
이렇게 인수의 default를 설정해 줌으로써 TS는 getC함수의 인수를 number, 반환타입 또한 number라는 것을 추론 할 수 있다. 
*/
function getC(c = 10) {
  return c;
}

/*------------------------------------------------------------------------------------------------------------------------------------*/

/*타입 추론 기본 2 */
interface Dropdown<T> {
  value : T;
  title : string;
}

var shoppingItem: Dropdown<string> = {
  value : 'rlawnsgur',
  title : 'test'
}

/*------------------------------------------------------------------------------------------------------------------------------------*/

/*타입 추론 기본 3 */

interface Dropdown2<T> {
  value : T;
  title : string;
}
interface DetailedDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
}
var detailedDropdown: DetailedDropdown<number> = {
  description : 'rlawnsgur',
  tag : 1,
  value : 2,
  title : 'why'
}

/*------------------------------------------------------------------------------------------------------------------------------------*/

/* Best Common Type */

//간단 요약 가장 근접한 타입을 추론 한다. 
//아래의 arr변수의 타입 추론의 결과는 -> 유니온타입으로 number,string,boolean이 지정된다.

let arr = [1,2,3,true, 'a'] 

