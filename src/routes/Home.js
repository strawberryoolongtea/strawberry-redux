import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ todos, addTodo }) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

// * mapStateToProps
function mapStateToProps(state) {
  return { todos: state };
}

// * mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
