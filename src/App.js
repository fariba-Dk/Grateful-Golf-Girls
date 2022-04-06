import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SignUp from "./components/SignUp";
import StyledApp from "./components/styled/App.styled";
import GlobalStyles from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";




const App = () => {
  return (
    <BrowserRouter>

      <ThemeProvider theme={darkTheme}>

        <GlobalStyles />
          <StyledApp>

            <SignUp/>



          </StyledApp>
      </ThemeProvider>

    </BrowserRouter>

  );
}

export default App;
