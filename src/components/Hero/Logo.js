import React from "react";
import styled from "styled-components";
import logoWidth503 from "../../images/logo_kt9kai_c_scale,w_503.png";
import logoWidth694 from "../../images/logo_kt9kai_c_scale,w_694.png";
import logoWidth824 from "../../images/logo_kt9kai_c_scale,w_824.png";

const StyledImg = styled.img`
  width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  max-width: 400px;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    width: 500px;
    max-width: unset;
  }

  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    width: 85%;
  }
`;

export default function Logo(props) {
  return (
    <StyledImg
      width="824px"
      height="638px"
      sizes="(max-width: 824px) 100vw, 824px"
      srcSet={`
          ${logoWidth503} 503w,
          ${logoWidth694} 694w,
          ${logoWidth824} 824w
        `}
      src={logoWidth824}
      {...props}
      alt="Logo firmy Marbond"
    />
  );
}
