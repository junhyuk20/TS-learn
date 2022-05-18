interface PhoneNumberDictionary {
  // 여러가지 키값 받기
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
// PhoneNumberDictionary 인터페이스의 phone 키값을 enum을 통해서 제한해서 오탈자를 방지하자!
enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  //class의 constructor은 기본적으로 아무런 type을 정의하지 못하게 되어있다.
  constructor() {
    this.fetchData();
  }

  //추가 된 내용 void
  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */

  //추가 된 내용 반환타입
  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }
  //추가 된 내용 반환타입
  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }
  //추가 된 내용 반환타입
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  //추가 된 내용 반환타입
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  //추가 된 내용 반환타입
  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }
  //추가 된 내용 반환타입
  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
