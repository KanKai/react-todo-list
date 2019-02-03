import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TodoItemWrapper,
  TodoItemMessage,
  TodoItemActionWrapper
} from "./styled";
import ActionButton from "../ActionButton";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo || {}
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.todo !== this.props.todo) {
      const { todo } = this.state;
      this.setState({ todo });
    }
  };

  onEditItem = () => {
    const { todo } = this.state;
    const { handleEdit } = this.props;
    handleEdit(todo.id);
  };

  onRemoveItem = () => {
    const { todo } = this.state;
    const { handleRemove } = this.props;
    handleRemove(todo.id);
  };

  render() {
    const { todo } = this.state;
    return (
      <TodoItemWrapper>
        <TodoItemMessage>
          ({todo.id}) - {todo.message}
        </TodoItemMessage>
        <TodoItemActionWrapper>
          <ActionButton onEdit={this.onEditItem} onRemove={this.onRemoveItem} />
        </TodoItemActionWrapper>
      </TodoItemWrapper>
    );
  }
}

TodoListItem.defaultProps = {
  todo: {
    id: "0",
    message: ""
  }
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    message: PropTypes.string
  })
};

export default TodoListItem;
