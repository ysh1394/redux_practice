import {ADD_TODO, COMPLETE_TODO,SHOW_ALL, SHOW_TODO,  SHOW_COMPLETE} from './actions'
import { combineReducers } from 'redux' // 단일 스토어인 리덕스의 리듀서들을 쪼갤 수 있게 해주는 내장 함수

// state = ['코딩', '점심 먹기'] >>> 등의 최초의 state는 배열 형태
// 위의 스테이트를 객체로, 하나의 투두는 = [{text: '코딩', done: false}, {text: '점심 먹기', done: false}]
// 위의 스테이트를 필터기능 까지 넣는다면 = {todos: [{text: '코딩', done: false}, {text: '점심 먹기', done: false}], filter: 'All'}
// const initialState = [];
const initialState = {
  todos: [], 
  filter: 'All'
};

const todosInitialState = initialState.todos // 투두즈리듀서만의 이니셜스테이트
const filterInitialState = initialState.filter // 필터리듀서만의 이니셜스테이트

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

export default reducer

// 컴바인 리듀서를 사용한 리듀서 형태
// 앞으로 투두즈리듀서에는 이 형태로 스테이트 받음 = [{text: '코딩', done: false}, {text: '점심 먹기', done: false}]
function todosReducer(previousState = todosInitialState, action) {

  if(action.type === ADD_TODO) {
    return [
      ...previousState,
      {text: action.text, done: false}
    ]
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
        if (index === action.index) {
          return {...todo, done:true}
        }
        return todo
      })
  }

  return previousState;
}



function filterReducer(previousState =filterInitialState, action) {
  if (action.type === SHOW_ALL ) {
    return 'All';
  }

  if (action.type === SHOW_TODO) {
    return 'Todo';
  }

  if (action.type === SHOW_COMPLETE) {
    return 'Complete';
  }

  return previousState;
}



// // 컴바인 리듀서로 인해서 사용을 변경됨 (아래의 주석이 컴바인 리듀서가 없을 때 써야하는 형태)

// export function todoApp(previousState =initialState, action) {
//   // 초기값을 설정해주는 부분
//   // 아래 주석은 'previousState =initialState'가 같은 말임(초기값을 전역에서 설정 해주면 됨)
//   // if (previousState === undefined) {
//   //   return []; 
//   // }
  
  
//   // 배열일 때 투두를 추가하는 방법 
//   // if(action.type === ADD_TODO) {
//   //   return [...previousState, { text: action.text, done: false }];
//   // }

//   // 초기값이 객체인 경우
//   if(action.type === ADD_TODO) {
//     // 내가 한 리턴의 문제점 : 원래의 객체에서 투두즈의 값만 바뀔 뿐, 몇개씩 생길 경우 추가가 되지 않음
//     // return {...previousState, todos : [{text: action.text, done: false}] };
//     // 강의에서 한 리턴
//     return {
//       ...previousState,
//       todos: [ ...previousState.todos, {text: action.text, done: false}]
//     }

//   }

//   // 만약에 액션.타입이 컴플리트 투두이면 기존에 있던 todo 리스트(previousState)를 맵으로 돌려서 새롭게 값을 반환
//   // 1. 만약에 맵의 인덱스(고유값)과 액션.인덱스(액션즈파일의 컴플리트투두의 인덱스)가 같으면 기존의 객체에서 해당 값의 done만 트루로 바뀜
//   // 초기 값이 배열인 경우에 쓰는 로직
//   // if (action.type === COMPLETE_TODO) {
//   //   return previousState.map((todo, index) => {
//   //     if (index === action.index) {
//   //       return {...todo, done:true}
//   //     }
//   //     return todo
//   //   })
//   // }

//   // 초기값이 객체인 경우
//   if (action.type === COMPLETE_TODO) {
//     // 내가 만든 리턴 : 값이 더해지지 않음
//     // return {...previousState, todos: [{done: true}]}; 
//     // 강의 리턴
//     return {
//       ...previousState,
//       todos: [...previousState.todos.map((todo, index) => {
//         if (index === action.index) {
//                 return {...todo, done:true}
//               }
//               return todo
            
//       })]
    
//     }
//   }

//   if (action.type === SHOW_ALL ) {
//     return {...previousState, filter: 'All'};
//   }
  
//     if (action.type === SHOW_TODO) {
//       return {...previousState, filter: 'Todo'};
//     }

//   if (action.type === SHOW_COMPLETE) {
//     return {...previousState, filter: 'Complete'};
//   }

//   // previousState.push() 와 같은 형태로 새로운 Todo 값을 받는 건 이뮤터블하지 않기에 안씀

//   return previousState;
// }