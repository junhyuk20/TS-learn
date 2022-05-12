/*
👓generic
🎉 함수의 인자와 반환 값에 대한 타입을 정하진 않았지만, 해당 함수를 호출시 제네릭으로 타입을 설정해 주어 호출할 때 마다 타입을 지정 하고 반환값의 타입 또한 지정 가능 하다. 

👓제네릭의 장점
🎉 위에서 말한 함수를 호출시 그 순간순간 타입을 결정할 수 있으므로 중복선언을 방지 할 수 있습니다.
🎉 제네릭의 장점으로 모든 타입을 받을수 있다는 것에 대해서 유니온 타입을 쓰면 되지 않을까? 라는 의견을 가질수 있습니다. 
    하지만 유니온 타입은 반환값의 타입을 설정 할 수 없으며, 그로인해 반환값의 타입에 따라 제공되는 기본함수를 알 수 없습니다. 이러한 반환값에 대한 이슈를 잠재우며 원하는 타입을 사용할 수 있는 제네릭이 등장!  
*/


/* 👓 제네릭의 첫 번째 예시 */
function logText1<T>(text:T): T {
    console.log(text)
     return text
 }
 logText1<string>('문자열')


/*👓제네릭의 장점 중복방지 코드에 대한 예시*/
function overlapFn1(text: string)  {    //🎉똑같은 함수인데 들어오는 매개변수 차이로 인해 타입만 다른 중복 함수 생성
    console.log(text)
    return text
}
overlapFn1('문자열')

function overlapFn2(text: number)  { //🎉똑같은 함수인데 들어오는 매개변수 차이로 인해 타입만 다른 중복 함수 생성
    console.log(text)
    return text
}
overlapFn2(123)


/*👓 유니온 타입을 이용한 제네릭 대체방법? */  
function test(param: string | number) { //🎉 하지만 반환타입을 정하지 못하므로, 이함수를 호출 후 받는 결괏값이 어떤 타입인지 알 수 없으므로 타입에 따라 제공되는 함수도 알 수 없음. 
    console.log(param)
    return param
}

/*👓 인터페이스 제네릭 사용하기 */
interface Dropdown<T> {
    value : T
    selected : boolean
}
const 테스트: Dropdown<string> = {value: '123', selected: false} 


/*👓 제네릭의 타입 제한 */
// 호출할 함수의 제네릭 type을 string으로 한뒤 호출하였을 때, TS는 이게 string인지 알수없기 떄문에 length를 사용못한다. 그러므로 매개변수에들어올 녀석이 배열임을 명시하여 TS가 length를 사용할 수 있는 녀석이다 라는것을 유추할 수 있도록 더 작성해 주어야 된다. 
function logTextLength<T>(text: T[]): T[] { 
    console.log(text.length)
    text.forEach(function(value){
        console.log(value)
    })
    return text
}
logTextLength<string>(['hi'])

/*👓 제네릭의 타입 제한2 -정의된 타입 사용하기 */
interface LengthType {
    length: number
}
function logTextLength2<T extends LengthType>(text: T): T {
    console.log(text.length)
    return text
}
logTextLength2('a')  //이렇게 호출하면 가능한 이유는, 문자열 자체적으로 length속성이 있기때문에 위 interface의 속성이 length이므로 사용가능(음 개인적으로 이부분 이해할때 엄청이해 안됬음, 왜냐 인터페이스 length는 number인데 이놈은 그 length가 아니라 문자얼의 length속성이기 떄문에... 갠적으로 이런부분도 막아야 되지 않나 싶음)
logTextLength2({ length: 123 })

/*👓 제네릭의 타입 제한3 - keyof 키값으로 제한하기 */
interface ShoppingItem { //keyof을 이용한 타입제한은 단순하게 key 이름 "name","price","stock" 으로 제네릭타입을 받겠다 라는 뜻임. 그래서 키 이름만 받을 수 있으며 키이름만이 반환된다. 
    name : string
    price : number
    stock : number
}

function getShoppingOption<T extends keyof ShoppingItem>(option:T):T{
    //console.log(option)
    return option
}
let key: string = getShoppingOption("name")
console.log(key)