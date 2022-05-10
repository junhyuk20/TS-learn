/* 인터페이스에 제네릭 타입을 적용한 정의 */
interface DropdownItem<T> {
  value : T
  selected : boolean
}

const emails: DropdownItem<string>[]  = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];
/*👓 유니온 타입으로 받는 방법
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number> ) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
*/
/* 함수에 제네릭을 줘서 하나의 함수로 다받는 방법 */
function createDropdownItem<T>(item: DropdownItem<T> ) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}


// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) { 
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});