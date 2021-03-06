import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: ${(props) => props.theme.primaryText};
  padding: 2rem;
  width: 280px;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    margin: unset;
    height: 200px;
    min-height: 230px;
  }

  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    min-height: unset;
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  color: ${(props) => props.theme.primaryText};
  margin: 0 auto 0.5rem auto;

  && svg {
    width: inherit;
    height: inherit;
  }
`;

const BorderTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(
    0 0,
    0 15%,
    0 50%,
    0% 80%,
    0 100%,
    15% 100%,
    15% 15%,
    50% 15%,
    100% 15%,
    100% 0,
    50% 0
  );
  background-color: ${(props) => props.theme.accent};
  width: 3rem;
  height: 3rem;
`;

const BorderBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  clip-path: polygon(
    0 0,
    0 15%,
    0 50%,
    0% 80%,
    0 100%,
    15% 100%,
    15% 15%,
    50% 15%,
    100% 15%,
    100% 0,
    50% 0
  );
  background-color: ${(props) => props.theme.accent};
  width: 3rem;
  height: 3rem;
  transform: rotate(180deg);
`;

const ServicesPanel = ({ icon, children }) => (
  <Panel>
    <BorderTop />
    <BorderBottom />
    <div>
      <Icon>{icon}</Icon>
      {children}
    </div>
  </Panel>
);

export default ServicesPanel;
