import Landing from './components/Landing'

import Bloggers from './routes/bloggers/Bloggers'
import UpdateBlogger from './routes/bloggers/UpdateBlogger'

import Courses from './routes/courses/Courses'
import UpdateCourse from './routes/bloggers/UpdateCourse'

import Posts from './routes/posts/Posts'
import UpdatePost from './routes/posts/UpdatePost'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (

    <Router>

      <Route exact path="/" component={Blogger} />
      <Route />

      <Route />
      <Route />

      <Route />
      <Route />

      <Route />
      <Route />

    </Router>
  );
}

export default App;


// import { useContext } from "react";

// import { ThemeProvider } from "styled-components";
// import SignedInApp from "./components/SignedInApp";
// import SignUp from "./components/SignUp";
// import StyledApp from "./components/styled/App.styled";
// import GlobalStyle from "./components/styled/GlobalStyles";
// import { UserContext } from "./components/UserContext";
// import { darkTheme } from "./themes";


// function App() {
//   const user = useContext(UserContext);

//   return (
//     <BrowserRouter>
//       <ThemeProvider theme={darkTheme}>
//         <GlobalStyle />
//         <StyledApp>

//           {user?.loggedIn === null ? (
//             ""
//           ) : user?.loggedIn === true ? (
//             <SignedInApp />
//           ) : (
//             <SignUp />
//           )}
//         </StyledApp>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
