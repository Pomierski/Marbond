import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: block;
  color: ${(props) => (props.active ? "#FFF" : props.theme.secondaryText)};
  margin-right: 1rem;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    font-size: ${(props) => props.theme.textRegular};
    margin-right: 2rem;
  }
`;

const Navbar = () => (
  <nav>
    <List>
      <Item active="true">Marbond</Item>
      <Item>
        <Link to="services" smooth="true">
          Usługi
        </Link>
      </Item>
      <Item>
        <Link to="about" smooth="true">
          Oferta
        </Link>
      </Item>
      <Item>
        <Link to="contact" smooth="true">
          Kontakt
        </Link>
      </Item>
    </List>
  </nav>
);

export default Navbar;
