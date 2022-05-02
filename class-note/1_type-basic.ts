/*TS 숫자열 선언 */
let num :number = 1234

/*TS 문자열 선언 */
let str :string = '문자열 선언방법'

/*TS 배열 선언 2종류 */
let arr :Array<number> = [1,2,3,4]
let arr2 :number[] = [1,2,3,4,5]

/*TS 튜플 선언 (=배열의 특정 인덱스에 타입까지 지정할 수 있는 녀석)*/
let address: [string,number] = ['test',1234]

/*TS 객체 선언 */
let obj : object = { }

// let person : object = { 이렇게 작성한다면 객체형식이라면 내부에 뭐가 들어와도 상관 없다라는 뜻이고
//     name: `test`,
//     age : 1000
// }

let person : {name:string, age:number} = { /*이렇게 작성하면 객체 타입을 받는데 속성의 이름과 타입까지 지정할 수 있음 , 무조건 이형태로 들어와야됨 */
    name : "test",
    age : 100
}

/*TS 진위 선언*/
let show : boolean = true
