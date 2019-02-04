import React, { Component } from "react";
import { TodoListWrapper } from "./styled";
import MyInput from "../MyInput";
import { generateID } from "../../utils";
import renderTodoItem from "./renderTodoItem";
import { ContextApi } from "./contextApi";

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

  clearMessage = () => {
    this.setState({ message: "" });
  };

  clearDataAll = () => {
    this.clearMessage();
    this.setState({ todos: [] });
  };

  removeById = id => {
    const { todos } = this.state;
    const newTodo = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodo });
  };

  editById = id => {
    const { todos } = this.state;
    const editTodo = todos.find(todo => todo.id === id);
    const newMessage = prompt("Edit this todo", editTodo.message);
    editTodo.message = newMessage;
    const newTodo = [...todos];
    newTodo[newTodo.findIndex(todo => todo.id === id)] = editTodo;
    this.setState({ todos: newTodo });
  };

  render() {
    const { message, todos } = this.state;
    return (
      <TodoListWrapper>
        <MyInput
          value={message}
          onChange={this.handleMessage}
          onClear={this.clearMessage}
          onClearAll={this.clearDataAll}
          onEnter={this.onPushTodo}
        />
        {renderTodoItem(todos, this.editById, this.removeById)}
      </TodoListWrapper>
    );
  }
}

const withContext = () => (
  <ContextApi.Provider
    value={{
      color: "red"
    }}
  >
    <TodoListComponent />
  </ContextApi.Provider>
);

export default withContext;
