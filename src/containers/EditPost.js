import { connect } from "react-redux";
import Edit from "../components/Edit";
import { editTodo } from "../actions";
import EditHook from "../components/EditHook";

const mapDispatchToProps = dispatch => ({
  editPost: data => dispatch(editTodo(data))
});

export default connect(null, mapDispatchToProps)(Edit);
