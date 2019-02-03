import React, { Component } from "react";
import { TodoListWrapper } from "./styled";
import MyInput from "../MyInput";

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    const { defaultTodoText = "" } = props;
    this.state = {
      message: defaultTodoText
    };
  }

  handleMessage = e => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  render() {
    const { message } = this.state;
    return (
      <TodoListWrapper>
        <MyInput value={message} onChange={this.handleMessage} />
      </TodoListWrapper>
    );
  }
}

export default TodoListComponent;
