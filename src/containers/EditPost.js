import { connect } from "react-redux"
import Edit from "../components/Edit"
import {editTodo} from '../actions'

const mapDispatchToProps = dispatch => ({
        dispatch,
        editPost: data => dispatch(editTodo(data))
        
    
})
export default connect(null,mapDispatchToProps)(Edit);