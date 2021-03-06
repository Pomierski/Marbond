import React from "react";
import Banner from "./Banner";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
`;

const Footer = () => (
  <footer>
    <Banner footer>
      <small>
        <IconWrapper>
          <AiFillGithub /> Pomierski
        </IconWrapper>
      </small>
      <small>© 2021 Marbond</small>
    </Banner>
  </footer>
);

export default Footer;
