 // reducers/rootReducers.js
 import { combineReducers } from 'redux';
 import todosReducers from './todos';

 const rootReducer = combineReducers({
     todosReducers
 });
 
 
 export default rootReducer;