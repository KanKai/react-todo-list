import React, { Component } from "react";
import { ButtonWrapper, EditButton, RemoveButton } from "./styled";
import { ContextApi } from "../TodoList/contextApi";

class ActionButton extends Component {
  render() {
    const { onEdit, onRemove, editable = true, removeable = true } = this.props;
    return (
      <ContextApi.Consumer>
        {value => (
          <ButtonWrapper>
            {editable && <EditButton onClick={onEdit} />}
            {removeable && (
              <RemoveButton onClick={onRemove} color={value.color} />
            )}
          </ButtonWrapper>
        )}
      </ContextApi.Consumer>
    );
  }
}

export default ActionButton;
