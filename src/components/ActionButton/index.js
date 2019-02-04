import React, { Component } from "react";
import { ButtonWrapper, EditButton, RemoveButton } from "./styled";
import { ContextApi } from "../TodoList/contextApi";

class ActionButton extends Component {
  render() {
    const { onEdit, onRemove } = this.props;
    return (
      <ContextApi.Consumer>
        {value => (
          <ButtonWrapper>
            <EditButton onClick={onEdit} />
            <RemoveButton onClick={onRemove} color={value.color} />
          </ButtonWrapper>
        )}
      </ContextApi.Consumer>
    );
  }
}

export default ActionButton;
