import React from "react";
import TodoListItem from "../TodoListItem";

const renderTodoItem = todos => {
  return todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);
};

export default renderTodoItem;
