import React from "react";
import TodoListItem from "../TodoListItem";

const renderTodoItem = (todos, handleEdit, handleRemove) => {
  return todos.map(todo => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  ));
};

export default renderTodoItem;
