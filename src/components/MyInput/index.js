import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyInputWrapper, InputText, ClearButton } from "./MyInputStyled";

class MyInput extends Component {
  onEnter = e => {
    if (e.key === "Enter") {
      this.props.onEnter();
    }
  };
  render() {
    const { value, onChange } = this.props;
    return (
      <MyInputWrapper>
        <InputText value={value} onChange={onChange} onKeyDown={this.onEnter} />
        <ClearButton> CLEAR </ClearButton>
      </MyInputWrapper>
    );
  }
}

MyInput.defaultProps = {
  value: "",
  onChange: () => {}
};

MyInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default MyInput;
