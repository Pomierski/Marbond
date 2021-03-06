import React from "react";
import styled from "styled-components";

const Img = styled.img`
  display: none;
  width: auto;
  max-height: 200px;
  margin: 0 auto;
  padding-left: 1rem;
  @media (min-width: 1000px) {
    max-height: 300px;
    display: block;
  }
`;

const AboutUsImg = ({ src, width, height, alt }) => (
  <div>
    <Img src={src} alt={alt} width={width} height={height}></Img>
  </div>
);

export default AboutUsImg;
