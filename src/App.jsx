import React from "react";
import { Header, Footer } from "src/components/layout";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/Theme";
import { GlobalStyles } from "src/styles/Global";
import { Chapters, Chapter } from "src/components/widgets/";
import { Container } from "src/ui/layout";
import { Subjects } from "src/components/widgets/subjects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Chapters>
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
        </Chapters>
        <Subjects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
