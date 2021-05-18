import {ADD_TODO, COMPLETE_TODO } from '../actions'
// import {initialState} from './reducer'

const todosInitialState = [] // 투두즈리듀서만의 이니셜스테이트

export default function todosReducer(previousState = todosInitialState, action) {

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
