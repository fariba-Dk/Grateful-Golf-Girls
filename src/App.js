import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SignUp from "./components/SignUp";
import StyledApp from "./components/styled/App.styled";
import GlobalStyles from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";
import Context from './components/Context';
import UserContext from './components/Context'
//hook
import {useContext} from 'react';




const App = () => {

  const user = useContext(UserContext)

//if user is NOT undefined, if its TRUE we render LOGGED in else => we ask the user to signup
  return (

    <BrowserRouter>

      <ThemeProvider theme={darkTheme}>

        <GlobalStyles />
          <StyledApp>
            <Context>

            {
              //if loggedIn === true
              user?.loggedIn === true ? "You are logged in!" : <SignUp/>}

            </Context>
          </StyledApp>
      </ThemeProvider>

    </BrowserRouter>

  );
}

export default App;
