/* Export 예제  */

// export 방법 2가지 첫번째 일일이 하나씩 export 하기

//export
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}
//export
interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
//export
enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// export 방법 2가지 두번째 한번에 export할거 다 보내기
export { PhoneNumberDictionary, Contact, PhoneType };
