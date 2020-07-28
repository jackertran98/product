import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.post
    };
  }

  onChangeEdit = e => {
    this.setState({
      value: { ...this.state.value, value: e.target.value }
    });
  };
  onEdited = () => {
    this.setState({ value: { ...this.state.value, value: "" } });
    this.props.editPost(this.state.value);
  };

  render() {
    console.log("Props cua Edit hien gio", this.props);
    return (
      <div>
        <input
          type="text"
          value={this.state.value.value}
          onChange={e => this.onChangeEdit(e)}
        />
        <button onClick={this.onEdited}>save</button>
      </div>
    );
  }
}

export default Edit;
