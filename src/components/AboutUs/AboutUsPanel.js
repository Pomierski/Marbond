import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { Link } from "react-scroll";

const Icon = styled.div`
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.accent};
  justify-content: center;
  align-items: center;

  && svg {
    width: inherit;
    height: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1rem;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    margin-left: 0;
  }
`;

const ListWrapper = styled.div`
  display: block;
  margin-left: 2.6rem;
  margin-top: 1rem;
  max-width: 450px;
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.2rem;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    margin-left: 4rem;
  }
`;

const AboutUsPanel = ({ title, children }) => (
  <div>
    <SectionTitle maxWidth="600px">
      <Wrapper>
        <Icon>
          <BiChevronRight />
        </Icon>
        {title}
      </Wrapper>
    </SectionTitle>
    <ListWrapper>
      {children}
      <Link to="contact" smooth="true">
        <Button>Kontakt</Button>
      </Link>
    </ListWrapper>
  </div>
);

export default AboutUsPanel;
