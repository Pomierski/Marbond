import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  color: #fff;
  background: none;
  border: 0;
  border-bottom: 1px solid #707070;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 0;
  height: 15rem;
  font-family: inherit;
  resize: vertical;
`;

const Textarea = (props) => <StyledTextarea {...props} />;

export default Textarea;
