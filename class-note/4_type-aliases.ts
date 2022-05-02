// interface Person { 
//     name: string
//     age : number
// }

type Person2 = {  
    name: string
    age: number
}

var hyuk : Person2 = {
    age : 30,
    name : 'hyuk'
}

/* 나만의 명칭을 만든 후 type 작성하기 */ 
type start = string
let littleStart:start = `반짝반짝 작은별`

type toDo = {id: string, title: string, done: boolean}
function getTodo (todo:toDo) {

}