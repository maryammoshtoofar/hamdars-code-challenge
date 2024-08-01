import React from "react";
import { Header, Footer } from "src/components/layout";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/Theme";
import { GlobalStyles } from "src/styles/Global";
import { Chapters, Chapter } from "src/components/widgets/";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header />
        <Chapters>
          <Chapter />
        </Chapters>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
