import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const borderColor = "#e8e8e8";
const bgColor = "#f1f1f1f1";

const MyInputContainer = styled.div``;

const InputText = styled.input`
  padding: 10px;
  border: 1px solid ${borderColor};
  border-right: 0;
  font-size: 16px;
  color: #46577b;
  background: none;
  flex: 1;
  outline: none;
`;

const MyInputWrapper = styled.div`
  margin: 2px 0;
  display: flex;
  background-color: ${bgColor};
`;

const ClearButton = styled.button`
  border: 1px solid ${borderColor};
  border-left: none;
  background-color: #fffa;
  outline: none;
  font-weight: 500;
  color: #46577b;
  cursor: pointer;
`;

const ClearAllButtonStyleLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #46577b;
`;

const ClearAllIcon = styled(FontAwesomeIcon)`
  margin-right: 3px;
  padding: 5px;
  background-color: #46577b;
  border: 1px solid #46577b;
  color: #ffffff;
  cursor: pointer;
`;

const ClearAllButton = props => <ClearAllIcon icon={faSync} {...props} />;

export {
  InputText,
  MyInputWrapper,
  ClearButton,
  MyInputContainer,
  ClearAllButton,
  ClearAllButtonStyleLeft
};
