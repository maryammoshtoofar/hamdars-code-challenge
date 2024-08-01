import React from "react";
import { Header, Footer } from "src/components/layout";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "src/styles/Theme";
import { GlobalStyles } from "src/styles/Global";
import { Chapters, Chapter } from "src/components/widgets/";
function App() {
  const Container = styled.div`
    position: relative;
  `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Chapters>
          <Chapter />
        </Chapters>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
