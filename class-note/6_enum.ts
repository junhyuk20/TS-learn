/*enum은 특정 값들의 집합을 의미하는 자료형입니다. */

//숫자형 enum 
enum ShoesNumber { // 초기 값을 정해주지 않으면 0부터 차례로 1씩 증가
   //Nike = 10 이렇게 초기화 
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

//테스트 진행 