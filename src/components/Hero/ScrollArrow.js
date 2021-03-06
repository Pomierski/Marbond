import styled, { keyframes } from "styled-components";
import { BiChevronDown } from "react-icons/bi";

const upAndDown = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(5px);
  }
`;

const Wrapper = styled.div`
  color: ${(props) => props.theme.accent};
  object-fit: fill;
  text-align: center;
  font-size: 3rem;
  animation: ${upAndDown} 1s ease-in-out infinite alternate;
  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    position: static;
  }
`;

const ScrollArrow = () => (
  <Wrapper>
    <BiChevronDown />
  </Wrapper>
);

export default ScrollArrow;
