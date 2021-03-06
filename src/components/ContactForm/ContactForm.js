import React from "react";
import styled from "styled-components";
import Form from "./Form";
import SectionTitle from "../SectionTitle";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto 8rem auto;
  flex-direction: column;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    width: 1000px;
  }
`;

const Column = styled.div`
  padding: 2rem;
  background-color: ${(props) =>
    props.dark ? "rgba(0,0,0,0.25)" : props.theme.accent};
  color: #fff;
  flex: ${(props) => props.flex || 1};
  @media (min-width: ${(props) => props.theme.screenSizeMd}) {
    padding: 3rem 6rem 3rem 3rem;
  }
`;

const Info = styled.div`
  margin-top: 2rem;
`;

const Strong = styled.strong`
  margin-bottom: 0.5rem;
  display: block;
`;

const ContactForm = () => {
  return (
    <>
      <SectionTitle margin="5rem 0 2rem 0" type="secondary" id="contact">
        Skontakuj się z nami
      </SectionTitle>
      <Wrapper>
        <Column dark="true" flex="2">
          <SectionTitle>Wyślij nam wiadomość</SectionTitle>
          <Form />
        </Column>

        <Column>
          <SectionTitle>Dane kontaktowe</SectionTitle>
          <Info>
            <Strong>Adres</Strong>
            <p>ul. Szparagowa 121 </p>
            <p>42-280 Częstochowa</p>
            <p>Poland</p>
          </Info>
          <Info>
            <Strong>Osoba kontaktowa</Strong>
            <p>Marcin Pomierski</p>
            <p>telefon: +48 728 847 726</p>
            <p>mail: marcin@marbond.pl</p>
          </Info>
        </Column>
      </Wrapper>
    </>
  );
};

export default ContactForm;
