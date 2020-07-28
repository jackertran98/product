import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Todos from '../components/Todos';

const mapDispatchToProps = dispatch => ({
  dispatch,
    onAddPost: post => dispatch(addTodo(post)),
});
export default connect(
  null,
  mapDispatchToProps
)(Todos);