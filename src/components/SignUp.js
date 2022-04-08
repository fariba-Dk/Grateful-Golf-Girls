import StyledSignUp, {SignUpButton} from './styled/SignUp.Styled';
//import "../images/golf-course.jpg"; // Tell webpack this JS file uses this image
// import SignUpButton from './styled/SignUp.Styled'


const SignUp = () => {

  const Signin = e => {
    e.preventDefault();
    const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    window.open(str, "_self");
  };
  // Import result is the URL of your image
  return(
  <>
  <StyledSignUp>

    <form onSubmit={Signin}>

      <div>
      <a href="https://faribadk-portfolio.herokuapp.com">


        <h1>Grateful Golf Girls 🏌🏼‍♀️</h1>
        </a>

      </div>
      <SignUpButton>
        Sign in with Google<i className="fa-brands fa-google"/>
      </SignUpButton>

      <div>


      <a href="https://faribadk-portfolio.herokuapp.com">Created by Fariba-DK

      </a>

    </div>


  </form>


  </StyledSignUp>



  </>)
}


export default SignUp;
