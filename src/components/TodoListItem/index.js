import React, { Component } from "react";
import PropTypes from "prop-types";
import { TodoItemWrapper, TodoItemMessage } from "./styled";

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

  render() {
    const { todo } = this.state;
    return (
      <TodoItemWrapper>
        <TodoItemMessage>
          {todo.message} ({todo.id})
        </TodoItemMessage>
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
