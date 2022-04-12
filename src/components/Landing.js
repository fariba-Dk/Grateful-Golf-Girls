
//import StyledSignUp, {SignUpButton} from './styled/SignUp.Styled';
//import "../images/golf-course.jpg"; // Tell webpack this JS file uses this image
// import SignUpButton from './styled/SignUp.Styled'


const Landing = () => {

  const SignIn = e => {
    e.preventDefault();
    const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    window.open(str, "_self");
  };
  // Import result is the URL of your image
  return(

    <div className="landing">
      <form onSubmit={SignIn}>

        <div className="page1">
          <a href="https://faribadk-portfolio.herokuapp.com">
            <h1>Grateful Golf Girls 🏌🏼‍♀️</h1>
          </a>
        </div>
            {/* <SignUpButton>
              Sign in with Google<i className="fa-brands fa-google"/>
            </SignUpButton> */}

        <div className="page1">
          <a href="https://faribadk-portfolio.herokuapp.com">Created by Fariba-DK
          </a>
        </div>
      </form>
    </div>
  )
}


export default Landing;
