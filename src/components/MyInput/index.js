import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MyInputWrapper,
  InputText,
  ClearButton,
  ClearAllButton,
  ClearAllButtonStyleLeft
} from "./MyInputStyled";

class MyInput extends Component {
  onEnter = e => {
    if (e.key === "Enter") {
      this.props.onEnter();
    }
  };
  render() {
    const { value, onChange, onClear, onClearAll } = this.props;
    return (
      <React.Fragment>
        <ClearAllButtonStyleLeft>
          <ClearAllButton onClick={onClearAll} /> CLEAR ALL DATA
        </ClearAllButtonStyleLeft>
        <MyInputWrapper>
          <InputText
            value={value}
            onChange={onChange}
            onKeyDown={this.onEnter}
          />
          <ClearButton onClick={onClear}> CLEAR </ClearButton>
        </MyInputWrapper>
      </React.Fragment>
    );
  }
}

MyInput.defaultProps = {
  value: "",
  onChange: () => {},
  onClear: () => {},
  onClearAll: () => {}
};

MyInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onClearAll: PropTypes.func
};

export default MyInput;
