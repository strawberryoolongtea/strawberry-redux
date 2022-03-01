import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// * replaced to createAction
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addTodo = (text) => {
//   return { type: ADD, text };
// };

// const deleteTodo = (id) => {
//   return { type: DELETE, id };
// };

// * replaced to createReducer
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// * createAction
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// * createReducer
// * state를 mutate할 때는 return이 없어도 되지만 (state를 리턴하지 않는다. state를 mutate한다.)
// * state를 mutate하지 않을 때는 return이 있어야 한다. (새로운 state를 리턴한다.)
const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});
// * replaced to configureStore
// const store = createStore(reducer);

// * configureStore
const store = configureStore({ reducer });

export const actionCreators = { addTodo, deleteTodo };

export default store;
