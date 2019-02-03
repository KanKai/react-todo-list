import React, { Component } from "react";
import { ButtonWrapper, EditButton, RemoveButton } from "./styled";

class ActionButton extends Component {
  render() {
    const { onEdit, onRemove } = this.props;
    return (
      <ButtonWrapper>
        <EditButton onClick={onEdit} />
        <RemoveButton onClick={onRemove} />
      </ButtonWrapper>
    );
  }
}

export default ActionButton;
