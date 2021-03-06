import styled from "styled-components";

const Header = styled.h2`
  font-size: ${(props) => props.theme.textMedium};
  color: ${(props) => props.theme.primaryText};
  font-weight: ${(props) => props.theme.fontBold};
  max-width: ${(props) => props.maxWidth};

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    font-size: ${(props) => props.theme.textBig};
  }
`;

export default Header;
