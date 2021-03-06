import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./components/AboutUs/AboutUs";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Hero />
          <Services />
          <About />
        </Container>
        <Banner>
          <Header>
            Nawiązujemy kontakty oraz prowadzimy negocjacje z kontrahentami
            niemiecko i angielskojęzycznymi, w tym pośrednictwo w zakresie
            usług, handlu i transportu
          </Header>
        </Banner>
        <Container>
          <ContactForm />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
