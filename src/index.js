import { createStore } from "redux";
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// * reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count <= 0 ? 0 : count - 1;
    default:
      return count;
  }
};

// * store
const countStore = createStore(countModifier);

// * subscribe
const onChange = () => (number.innerText = countStore.getState());

countStore.subscribe(onChange);

// * dispatch
const handleAdd = () => countStore.dispatch({ type: ADD });
const handelMinus = () => countStore.dispatch({ type: MINUS });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handelMinus);

// * vanilla counter
// let count = 0;

// const updateText = () => (number.innerText = count);

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };
// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
