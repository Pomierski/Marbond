import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import ServicesPanel from "./ServicesPanel";
import { BiLineChart, BiDirections } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0 8rem 0;

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Services = () => (
  <>
    <SectionTitle margin="5rem 0 0 0" type="secondary" id="services">
      Nasze usługi
    </SectionTitle>
    <Wrapper>
      <ServicesPanel icon={<BiLineChart />}>
        Optymalizacja procesów produkcyjnych i jakościowych
      </ServicesPanel>
      <ServicesPanel icon={<BiDirections />}>
        Doradztwo w zakresie łączenia materiałów
      </ServicesPanel>
      <ServicesPanel icon={<FaHandshake />}>
        Nawiązywanie kontaktów handlowych i prowadzenie negocjacji
      </ServicesPanel>
    </Wrapper>
  </>
);

export default Services;
