/* Union Type(🎉하나의 변수에 한 가지이상의 타입을 정의하는 녀석)*/
/* Union Type의 장점
🎉 하나의 변수에 한가지 이상의 타입을 정의 하므로 어떤 타입이 들어오는 지에 따라 js에서 기본적으로 제공해주는 메서드들이 달라 지게 되는데. 유니온 타입으로 설정한 후
    if조건문을 통해 type이 number,string,array,object 등등.. 에 따라서 해당하는 타입에 맞춰 기본 메서드를 사용 할 수 있다. (🎉비교되는 상황 만약 어떤 변수의 type을 any로 받을 경우🎉)
    들어온 파라메터가 무슨 타입인지 알지 못하므로 해당 하는 메서드를 사용 할 수 없다.
*/
var test; // string 이거나 number 이거나 boolean 이다. 
function logMessage(value) {
    if (typeof value === 'number') {
        value.toLocaleString(); //이렇게 타입이 정해지면 해당 타입에 맞는 기본 메서드들이 제공된다. 
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number'); // 위 if조건문에 걸리는게 없으면 에러를 뱉자 !!
}
// Union Type 적용된 함수 
// function askSomeone(value: test1 | test2) {
//     value.name  // interface를 유니온 타입으로 사용할 때 주의사항으로는, 해당 인터페이스들의 공통된 속성을 사용해야 한다. 만약 공통된 속성말고 다른 속성을 사용하고 싶다면 타입가드로 타입을 좁혀 컴파일러가 예측할 수 있게 좁혀 주어야 됩니다.
//     //value.age 
//     //value.skill
//     console.log(value.name)
// } 
// askSomeone({ name: 'test',age:30}) // age를 사용하려면 타입가드를 통해 타입을 유추 할 수있도록 도와주어야 된다. 타입 가드는 나중에 해보자... 
/* Intersection 타입 */
function askSomeone2(value) {
    console.log(value.name, value.age, value.skill);
}
askSomeone2({ name: 'test', age: 28, skill: 'javascript' });
