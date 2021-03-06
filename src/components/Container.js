import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  background: ${(props) =>
    props.bg === "light" ? props.theme.accent : "none"};

  @media (min-width: ${(props) => props.theme.screenSizeXl}) {
    padding: 0 3rem;
  }
  @media (min-width: 1420px) {
    width: 1400px;
  }
`;
export default Container;
