import styled from "styled-components";

const borderColor = "#e8e8e8";
const bgColor = "#f1f1f1f1";

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
  margin: 10px 0;
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

export { InputText, MyInputWrapper, ClearButton };
