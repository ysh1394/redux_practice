export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = 'COMPLETE_TODO';

// {type: ADD_TODO, text: '할 일'}
export function addTodo(text) { 
  return {
    type : ADD_TODO,
    text,
  }
}

// index 번째 있는 todo를 complete로 수정하는 로직
// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}


export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_TODO = 'SHOW_TODO';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';


export function showAll() {
  return {
    type: SHOW_ALL
  }
}

export function showTodo() {
  return {
    type: SHOW_TODO,
  }
} 

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  }
}