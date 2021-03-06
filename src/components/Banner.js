import React from "react";
import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.accent};
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    padding: 2rem 3rem;
  }
`;

const Content = styled.div`
  font-weight: ${(props) =>
    props.footer ? props.theme.fontRegular : props.theme.fontBold};
  color: ${(props) => props.theme.primaryText};
  max-width: 800px;
  margin: ${(props) => props.footer && "0 auto"};
  text-align: ${(props) => props.footer && "center"};
`;

const Banner = ({ children, footer }) => (
  <Wrapper>
    <Container>
      <Content footer={footer}>{children}</Content>
    </Container>
  </Wrapper>
);

export default Banner;
