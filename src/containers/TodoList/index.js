import React, { Component } from "react";
import TodoListComponent from "../../components/TodoList";
import { TodoListContainerStyled } from "./styled";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTodoText: ""
    };
  }
  render() {
    const { defaultTodoText } = this.state;
    return (
      <TodoListContainerStyled>
        <TodoListComponent defaultTodoText={defaultTodoText} />
      </TodoListContainerStyled>
    );
  }
}

export default TodoList;
