import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyInputWrapper, InputText, ClearButton } from "./MyInputStyled";

class MyInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <MyInputWrapper>
        <InputText value={value} onChange={onChange} />
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
