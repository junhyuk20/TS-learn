/* interface를 사용하는 이유! 

1. 앞서 말한 바와 같이 반복되는 타입을 자주 사용할 때 일일이 하드코딩 하는 것보다 interface를 작성해서 사용하면 아주 편리하다. 
2. 가독성이 좋다, (3자가 딱 봐도 타입이 뭔지 알기 쉽다.)
3. 이렇게 일관성 있게 통일하고 나면 오탈자도 없고 고칠게 있으면 interface만 고치면 된다.
4. 상호간의 약속! 이 인터페이스는 이렇게 쓰기로하자 라고 약속! 
Tip : 별도의 파일에 interface을 작성 하고 사용하자  
*/
interface User {
    age : number
    name : string
}

/*변수에 활용한 인터페이스*/
let seho: User = {
    age: 33,
    name :'세호'
}

/*함수에 활용한 인터페이스*/
function getUser(user: User) { 
    console.log(user)
}

/*getUser를 사용하기 위해서 만든 test*/
const test = {  
    name: 'junhyuk',
    age: 100
}
getUser(test)

/* 인터페이스로 함수의 구조 설정하기 */
interface SumFunction {
    (a: number, b: number) : number
}

let sum: SumFunction;
sum = function (a:number, b:number):number { 
    return a+b
}

/* 배열 인덱싱 방식 정의하기 */
interface StringArray {
    [index: number] : string  //배열의 인덱싱은 number로 하며, 그 값의 타입은 string이다. 라고 배열구조 설정 
}

let arr:StringArray = ['a','b','c']
// arr[0] = 10 에러가 뜬다 why? 위에서 값의 타입은 string이라고 정의했는데 현재 number값이 들어왔기 때문이다.


/* 딕셔너리 패턴 */
interface StringRegexDictionary {
    [key: string]: RegExp  //객체를 작성할 떄 key의 타입은 string이며 value의 타입은 RegExp(정규식) 만이 올 수 있다는 것을 인터페이스로 정의 한것
}

var obj: StringRegexDictionary = {
    testFile : /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' 에러가 뜬다 why? value의 타입이 정규식이 아닌 string이 들어왔으므로 이다. 
Object.keys(obj).forEach(function(value){
    console.log(value)
})

/* 인터체이스 확장 (extends, 상속)*/ 
interface Person {
    name: string
    age: number
}

interface Developer extends Person { // extends 를 사용해서 Person의 속성을 상속 받음  
    language: string
}

let jun: Developer = { // Developer 인터페이스는 Person인터페이스를 상속 받았으므로 변수 jun은 3가지 속성을 모두 사용 할 수 있다.
    language : 'ts',
    name: 'jun',
    age : 1234
}