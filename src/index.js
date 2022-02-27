import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (todo) => {
  store.dispatch({ type: ADD_TODO, todo });
};

const deleteTodo = (e) => {
  store.dispatch({ type: DELETE_TODO, id: parseInt(e.target.parentNode.id) });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ todo: action.todo, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteTodo);
    li.id = todo.id;
    li.innerText = todo.todo;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  addTodo(todo);
};

form.addEventListener("submit", onSubmit);
