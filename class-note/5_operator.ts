/* Union Type(🎉하나의 변수에 한 가지이상의 타입을 정의하는 녀석)*/

/* Union Type의 장점 
🎉 하나의 변수에 한가지 이상의 타입을 정의 하므로 어떤 타입이 들어오는 지에 따라 js에서 기본적으로 제공해주는 메서드들이 달라 지게 되는데. 유니온 타입으로 설정한 후 
    if조건문을 통해 type이 number,string,array,object 등등.. 에 따라서 해당하는 타입에 맞춰 기본 메서드를 사용 할 수 있다. (🎉비교되는 상황 만약 어떤 변수의 type을 any로 받을 경우🎉)
    들어온 파라메터가 무슨 타입인지 알지 못하므로 해당 하는 메서드를 사용 할 수 없다. 
*/


var test: string | number | boolean  // string 이거나 number 이거나 boolean 이다. 

function logMessage(value: string | number) { /* 함수의 파라메터의 타입을 1개이상 주고 싶을 때 |을 사용하면 됩니다. 이걸 Union Type이라 칭함 */
    if (typeof value === 'number') {
        value.toLocaleString()  //이렇게 타입이 정해지면 해당 타입에 맞는 기본 메서드들이 제공된다. 
    } 
    if (typeof value === 'string') {
        value.toString() 
    }
    throw new TypeError('value must be string or number') // 위 if조건문에 걸리는게 없으면 에러를 뱉자 !!
}
//logMessage('테스트')
//logMessage(123)


/* Union Type의 장점
🎉 어떤 변수의 타입을 정해줄 때 여러개의 타입으로 정해줄 때가 있다. 그럴때 바로 유니온 타입을 사용 하자 문법은 | (= 파이프로 작성하면 된다.)
🎉 유니온 타입으로 지정하고 사용하면 해당 타입에 맞는 기본 메서드를 사용 할 수 있다. 반대 예로써 any를 사용하면 해당 타입이 무엇인지 파악하지 못하므로 그냥 js를 사용하는 것과 다를바가 없다. 
*/
interface test1 {
    name : string
    age : number
}
interface test2 {
    name:string
    skill: string
}
// Union Type 적용된 함수 
 function askSomeone(value: test1 | test2) {
     value.name  // interface를 유니온 타입으로 사용할 때 주의사항으로는, 해당 인터페이스들의 공통된 속성을 사용해야 한다. 
     //value.age 
     //value.skill
     console.log(value.name)
 } 
 askSomeone({ name: 'test',age:30}) // age를 사용하려면 타입가드를 통해 타입을 유추 할 수있도록 도와주어야 된다. 타입 가드는 나중에 해보자...

 /* Intersection 타입
🎉 유니온과 인터섹션의 차이점 : 유니온은 공통된 속성만을 사용할 수 있지만 인터섹션은 두개의 인터페이스 속성 전부 다 사용 할 수 있다
🎉 또한 타입가드 조차 사용하지 않아도 된다.  
 */
 function askSomeone2(value: test1 & test2) { 
     console.log(value.name, value.age, value.skill )   
 } 
askSomeone2({name: 'test' , age: 28, skill:'javascript'})
