/* 
TS에서 말하는 모듈이란 ES6+ 의 Module의 개념과 똑 같습니다. 
import 할시 tip! from 뒤에 나오는 경로부터 먼저 설정하는게 좋다, why? 경로를 먼저 설정한 후 땡겨올 녀석의 이름을 다 안쳐도 자동완성이 나오기 때문
*/
import { Todo } from "./types";

var item: Todo = {
  title: "할 일 1",
  checked: false,
};
