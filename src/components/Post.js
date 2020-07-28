import React, { Component } from "react";
import Edit from "./Edit";
import EditHook from "../containers/EditPost";
import EditPost from "../containers/EditPost";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }
  editted = () => {
    this.setState({
      value: true
    });
  };
  render() {
    const { post } = this.props;

    return (
      <div>
        <h2>
          {post.value} <button onClick={this.editted}>edit</button>{" "}
        </h2>
        {this.state.value ? <EditPost post={post} /> : ""}
      </div>
    );
  }
}
