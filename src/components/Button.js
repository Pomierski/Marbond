import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "5rem"};
  height: 2rem;
  padding: 1.2rem 3.5rem;
  margin: 2rem 0;
  cursor: pointer;
`;

const Button = ({ children, width, onClick }) => (
  <StyledButton width={width} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
