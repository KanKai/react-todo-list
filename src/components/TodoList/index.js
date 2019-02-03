import React, { Component } from "react";
import { TodoListWrapper } from "./styled";
import MyInput from "../MyInput";
import { generateID } from "../../utils";
import renderTodoItem from "./renderTodoItem";

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    const { defaultTodoText = "" } = props;
    this.state = {
      message: defaultTodoText,
      todos: []
    };
  }

  handleMessage = e => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  onPushTodo = async e => {
    try {
      const { message } = this.state;
      if (message.trim().length === 0) return;
      await this.setState(({ todos }) => ({
        todos: [...todos, { id: generateID(), message }]
      }));
      this.clearMessage();
    } catch (error) {
      console.log("error ---> ", error);
    }
  };

  clearMessage() {
    this.setState({ message: "" });
  }

  render() {
    const { message, todos } = this.state;
    return (
      <TodoListWrapper>
        <MyInput
          value={message}
          onChange={this.handleMessage}
          onEnter={this.onPushTodo}
        />
        {renderTodoItem(todos)}
      </TodoListWrapper>
    );
  }
}

export default TodoListComponent;
