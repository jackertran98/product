import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'

function NewPost({todos}) {
    return (
        <div>
           {todos.map(post => {
        return (
          <Post post={ post } key={ post.id }/>
        );
      })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.todosReducers
    }
}
export default connect(mapStateToProps,null)(NewPost)
