import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: #fff;
  background: none;
  border: 0;
  border-bottom: 1px solid #707070;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 0;
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
