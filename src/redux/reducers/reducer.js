import { combineReducers } from 'redux'
import todosReducer from './todos'
import filterReducer from './filter'

// export const initialState = {
//   todos: [], 
//   filter: 'All'
// };

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

export default reducer