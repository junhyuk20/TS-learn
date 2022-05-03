/*
👓generic
🎉 함수의 인자와 반환 값에 대한 타입을 정하진 않았지만, 해당 함수를 호출시 제네릭으로 타입을 설정해 주어 호출할 때 마다 타입을 지정 하고 반환값의 타입 또한 지정 가능 하다. 

👓제네릭의 장점
🎉 위에서 말한 함수를 호출시 그 순간순간 타입을 결정할 수 있으므로 중복선언을 방지 할 수 있습니다.
🎉 제네릭의 장점으로 모든 타입을 받을수 있다는 것에 대해서 유니온 타입을 쓰면 되지 않을까? 라는 의견을 가질수 있습니다. 
    하지만 유니온 타입은 반환값의 타입을 설정 할 수 없으며, 그로인해 반환값의 타입에 따라 제공되는 기본함수를 알 수 없습니다. 이러한 반환값에 대한 이슈를 잠재우며 원하는 타입을 사용할 수 있는 제네릭이 등장!  
*/


/* 👓 제네릭의 첫 번째 예시
function logText<T>(text:T): T {
    console.log(text)
     return text
 }
 logText<string>('문자열')
 */

/*👓제네릭의 장점 중복 코드에 대한 예시
function logText(text: string)  {    🎉똑같은 함수인데 들어오는 매개변수 차이로 인해 타입만 다른 중복 함수 생성
    console.log(text)
    return text
}
logText('문자열')

function logNumber(text: number)  { 🎉똑같은 함수인데 들어오는 매개변수 차이로 인해 타입만 다른 중복 함수 생성
    console.log(text)
    return text
}
logNumber(123)
*/

/*👓 유니온 타입을 이용해서 여러 타입 받기  
function test(param: string | number) { 🎉 하지만 반환타입을 정하지 못하므로, 이함수를 호출 후 받는 결괏값이 어떤 타입인지 알 수 없으므로 타입에 따라 제공되는 함수도 알 수 없음. 
    console.log(param)
    return param
}
*/