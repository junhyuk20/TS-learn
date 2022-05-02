/*함수의 타입을 정의하는 방식!*/ 

function sum1(a:number,b:number) { /*함수의 파라메터 타입만 정하는 방법 */
    return a+b
}
sum1(1,2)

function output():number {  /*함수의 반환값의 타입을 정하는 방법 */
    return 10
}
output()

function sum2(a:number , b:number) :number { /*함수의 파라메터와 결괏값의 타입까지 지정하는 방식 */
    return a+b;
}
sum2(10,20) 

/*TS는 함수를 선언시 작성한 파라메터 갯수만 받는다(적든,많든 선언시 작성한 갯수까지만 허용). 이것이 JS와 다른점  */
function tset1(a:number,b:number) :number {
    return a+b
}
tset1(10) 
tset1(10,20,30,20,50) 


/*
TS 옵셔널 파라미터 -> 함수의 파라메터를 항상 고정된 갯수만 사용하는게 아니라 예를들어 기본은 3개 이고 꼭 3개가 안들어와도 된다 하고 하면 사용하는 방법 
사용법으로는 변수명 뒤에 '?'(=물음표)를 붙여 주면 된다
*/
function log(a: string, b: string, c?: string) {
    let test : object ={
        a: a,
        b: b,
        c: c
    }
    return test
}
log(`테스트`,`테스트2`)