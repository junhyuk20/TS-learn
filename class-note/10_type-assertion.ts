// 타입 단언 (type assertion), 개발자가 TS보다 타입추론을 잘할 수 있을 때 TS야 건드리지마 내가 정한 타입으로 사용할거야 라고 명시한다.

var a;
a = 20;
a = "a";
var b = a as string;

// DOM API를 조작할 때 타입 단언이 제일 많이 사용 된다.

var div = document.querySelector("div"); // div변수에 마우스를 데면 TS는 반환값으로 HTMLDivElement을 띄운다. 하지만 사용자가 현재 반환값이
if (div === null) {
  console.log(`맞아 `);
}
