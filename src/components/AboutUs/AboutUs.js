import React from "react";
import styled from "styled-components";
import Illustration1 from "../../images/aboutus1.svg";
import Illustration2 from "../../images/aboutus2.svg";
import Illustration3 from "../../images/aboutus3.svg";
import AboutUsPanel from "./AboutUsPanel";
import SectionTitle from "../SectionTitle";
import Header from "../Header";
import AboutUsImg from "./AboutUsImg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.primaryText};
  width: 100%;
  margin-top: 3rem;

  @media (min-width: ${(props) => props.theme.screenSizeLg}) {
    && div {
      flex: 1;
    }
  }
`;

const TextAccent = styled.span`
  color: ${(props) => props.theme.accent};
`;
const About = () => (
  <>
    <SectionTitle margin="5rem 0 0 0" type="secondary" id="about">
      Dlaczego Marbond?
    </SectionTitle>
    <Header maxWidth="650px">
      Bazujemy na doświadczeniu swoich pracowników, aby{" "}
      <TextAccent>zapewnić najwyższą jakość usług</TextAccent>
    </Header>
    <Wrapper>
      <AboutUsPanel title="Optymalizacja procesów produkcyjnych oraz w zakresie zapewnienia jakości">
        <ul>
          <li>
            ogólny przegląd sytuacji i/lub istniejących systemów w
            przedsiębiorstwie
          </li>
          <li>
            identyfikacja problemów produkcyjnych oraz jakościowych przy pomocy
            dedykowanych narzędzi
          </li>
          <li>wdrażanie lub optymalizacja LEAN MANAGEMENT</li>
          <li>
            projektowanie krótko- i długoterminowych zmian w ramach procesu
            ciągłego doskonalenia
          </li>
        </ul>
      </AboutUsPanel>
      <AboutUsImg
        src={Illustration1}
        alt="Ilustracja optymalizacji procesów produkcyjnych"
        width="804"
        height="472.751"
      />
    </Wrapper>
    <Wrapper>
      <AboutUsPanel title="Łączenie materiałów metodami spawania, lutowania oraz klejenia">
        <ul>
          <li>
            określenie optymalnej technologii łączenia (parametry
            wytrzymałościowe, energochłonność, czaso- i pracochłonność, inne
            koszty)
          </li>
          <li>
            dobór urządzeń i materiałów podstawowych oraz materiałów
            pomocniczych, w tym do obróbki ubytkowej czy zabezpieczenia
            powierzchniowego
          </li>
          <li>określenie niezbędnych środków ochrony indywidualnej</li>
          <li>wsparcie w procesach pomocniczych</li>
        </ul>
      </AboutUsPanel>
      <AboutUsImg
        src={Illustration2}
        alt="Ilustracja łączenia materiałów"
        width="888"
        height="460.528"
      />
    </Wrapper>
    <Wrapper>
      <AboutUsPanel title="Podejmowanie działalności w ramach Katowickiej SSE na terenie miasta Częstochowy">
        <ul>
          <li>ocena możliwości przedsiębiorstwa</li>
          <li>
            reprezentowanie firmy w jednostkach KSSE oraz Urzędu Miasta
            Częstochowy
          </li>
          <li>pomoc w opracowaniu dokumentacji projektowej</li>
          <li>
            prowadzenie negocjacji z jednostkami administracyjnymi oraz
            kontrahentami
          </li>
          <li>prowadzenie projektu</li>
        </ul>
      </AboutUsPanel>
      <AboutUsImg
        src={Illustration3}
        alt="Ilustracja podejmowania działalności"
        width="700"
        height="438"
      />
    </Wrapper>
  </>
);

export default About;
