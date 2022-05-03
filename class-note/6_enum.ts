/*enum은 특정 값들의 집합을 의미하는 자료형입니다. */

//숫자형 enum 
enum ShoesNumber { // 초기 값을 정해주지 않으면 0부터 차례로 1씩 증가 , 초기화방법 Nike = 1 , Nike = '나이커'
    Nike,
    Adidas
}
let myShoesNumber = ShoesNumber.Nike
console.log(myShoesNumber) //0

//문자형 enum
enum ShoesString {
    Nike = '나이키',
    Adidas ='아디다스'
}
let myShoesString = ShoesString.Nike
console.log(myShoesString)


//enum을 이용한 타입 설정 
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log(`정답입니다.`)
    } 
    if (answer === Answer.No) {
        console.log(`오답입니다.`)
    }
}
askQuestion(Answer.Yes) //좋은점 enum으로 타입을 정했으므로 정해진 Answer로만 인수를 넣을 수 있다. 그러므로 오타나, 예외적인 케이스가 줄어든다.
