import React, { Component } from "react";
import TodoListComponent from "../../components/TodoList";
import { TodoListContainerStyled } from "./styled";
import { withRouter } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    const { message = "" } = props.match.params;
    this.state = {
      defaultTodoText: message
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

export default withRouter(TodoList);
