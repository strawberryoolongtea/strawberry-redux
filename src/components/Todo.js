import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Todo({ text, clickDel, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={clickDel}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { clickDel: () => dispatch(actionCreators.deleteTodo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(Todo);
