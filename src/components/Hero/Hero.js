import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ScrollArrow from "./ScrollArrow";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: fit-content(400px) fit-content(100px) 1fr;
  padding-top: 3.5rem;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: calc(${window.innerHeight}px - 3.5rem);
  @media (max-height: 600px) and (orientation: landscape) {
    height: 100%;
    grid-template-columns: fit-content(300px);
    grid-template-rows: fit-content(400px) fit-content(100px) 200px;
  }
  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    height: calc(100vh - 3.5rem);
    grid-template-columns: 1fr 1.7fr;
    grid-template-rows: 1fr 110px;
    text-align: left;
  }
`;

const Brand = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-weight: ${(props) => props.theme.fontBold};
  font-size: 4.5rem;
  text-transform: uppercase;
  margin-bottom: 0;
  grid-row: 1;
  grid-column: 1;
`;
const BrandSubText = styled.h2`
  color: ${(props) => props.theme.accent};
  font-weight: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.textMedium};
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    font-size: ${(props) => props.theme.textLarge};
  }
`;

const MottoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    position: static;
    grid-column: 1 / 3;
    grid-row: 2;
  }
`;

const Motto = styled.p`
  color: ${(props) => props.theme.primaryText};
  font-size: ${(props) => props.theme.textMedium};
  text-align: center;
`;

const LogoWrapper = styled.div`
  grid-row: 1;
  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    grid-column: 2;
  }
`;

const Hero = () => (
  <>
    <Wrapper>
      <div>
        <Brand>Marbond</Brand>
        <BrandSubText>Outsourcing company</BrandSubText>
      </div>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MottoWrapper>
        <Motto>Naszą misją jest optymalizacja procesów</Motto>
        <ScrollArrow />
      </MottoWrapper>
    </Wrapper>
  </>
);

export default Hero;
