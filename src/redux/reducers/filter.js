import {SHOW_ALL, SHOW_TODO,  SHOW_COMPLETE} from '../actions'


const filterInitialState = 'All' // 필터리듀서만의 이니셜스테이트

export default function filterReducer(previousState =filterInitialState, action) {
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