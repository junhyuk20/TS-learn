//π μΈν°νμ΄μ€ νμνΈν : νμ νΈνμ΄λ νμμ€ν¬λ¦½νΈ μ½λμμ νΉμ  νμμ΄ λ€λ₯Έ νμμ μ λ§λμ§λ₯Ό μλ―Έν©λλ€. μλ₯Ό λ€λ©΄ μλμ κ°μ μ½λλ₯Ό μλ―Έν©λλ€.

/*π νμνΈν μΈν°νμ΄μ€, ν΄λμ€ μΌλ μμ */
interface Developer11 {
  name: string;
  skill: string;
}

// interface Person11 {
//   name: string;
// }

class Person11 {
  name: string;
}
let developer11: Developer11;
let person11: Person11;

//developer11 = Person11;        (μΈν°νμ΄μ€ μΌλ) λμμ λ°λ μͺ½μ νμμμ± κ°―μλ₯Ό λ§μΆ° μ£Όμ΄μΌ λλλ°, person11μ νλλ°μ μμΌλ―λ‘ νΈνμ΄ μλλ€.
developer11 = new Person11(); // (ν΄λμ€ μΌλ) λμμ λ°λ μͺ½μ νμμμ± κ°―μλ₯Ό λ§μΆ° μ£Όμ΄μΌ λλλ°, person11μ νλλ°μ μμΌλ―λ‘ νΈνμ΄ μλλ€.

person11 = developer11; // λ°λλ‘ λμνλ μͺ½μ κ°―μκ° λ§κ³  λ°λ μͺ½μ΄ μ μΌλ©΄ νμ νΈνκ°λ₯νλ€. μ? developer11κ° person11μ νμν λͺ¨λ  κ±Έ κ°μ§κ³  μμΌλκΉ

/************************************************************************************************************************************************************************************************** */

//π ν¨μ, μ λ€λ¦­ μμ 

// ν¨μ
var add = function (a: number) {
  //console.log(a);
};
var sum = function (a: number, b: number) {
  //return a + b;
};

sum = add; // λμμ λ°λ μΌμͺ½ κΈ°μ€μΌλ‘ νμν νλΌλ©ν° κ°―μλ³΄λ€ μ  μ κ² λ€μ΄ μ¬λλ νμ νΈνμ΄ κ°λ₯
add = sum; // λμμ λ°λ μΌμͺ½ κΈ°μ€μΌλ‘ νμν νλΌλ©ν° κ°―μλ³΄λ€ λ λ§μ΄ λ€μ΄ μ¬λλ νμνΈνμ΄ λΆκ°λ₯

//π μ λ€λ¦­

interface Empty<T> {} // μλ¬΄ μμ±λ μ μ ν΄μ£Όμ§ μμμ λ

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;

// μμ±μ μ μ νμ λ
interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
