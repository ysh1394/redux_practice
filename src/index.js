import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import { addTodo, completeTodo, showTodo} from './redux/actions'





// 스토어의 변경사항을 구독하는 것 (뷰의 watch 같은?) (코드 순서 영향 안받음)
const unSubscribe = store.subscribe(() => {
  console.log('섭스크라이브 안 쪽 store.getState >>>>>', store.getState());
}) 

store.dispatch(addTodo('1')) 
store.dispatch(addTodo('2')) 
store.dispatch(addTodo('3')) 
store.dispatch(addTodo('4')) 
store.dispatch(completeTodo(2)) 
store.dispatch(showTodo()) 

// // 스토어 내장함수 목록 확인
// console.log('store >>>>>', store); 

// // subscribe 안했을 때의 getState 상태 값 (순서 영향 받음)
// console.log('store.getState >>>>>', store.getState()); 

// // 스토어 내장함수인 디스패치는 (액션을 인자로 받음 그래서 액션즈에 만든 함수를 인자로 받게하면 됨)
// store.dispatch(addTodo('1')) 
// store.dispatch(addTodo('2')) 
// store.dispatch(addTodo('3')) 
// unSubscribe();
// // unSubscribe라는 함수에서 subscribe를 실행함 (unSubscribe함수 리턴으로 subscribe 콜백 함수를 받는 격)
// // 그래서 unSubscribe 함수를 호출하면 subscribe 안의 콘솔이 실행이 안됨.
// store.dispatch(addTodo('4')) 
// store.dispatch(addTodo('5')) 
// store.dispatch(addTodo('6')) 

// // 디스패치 후의 겟스테이트 상태값 (순서 영향 받음)
// // subscribe 안의 콘솔은 찍히지 않지만 dispatch는 동작하고, getState의 값도 변함
console.log('store.getState >>>>>', store.getState());
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
