import React, { Component } from 'react';
import CreateTodo from './containers/createTodo';
import NewPost from './containers/NewPost';


class App extends Component {
  render() {
    return (
      <div>
          <CreateTodo />
          <NewPost />
      </div>
    );
  }
}

export default App;