import styled from 'styled-components'

const StyledSignUp = styled.div`

background-color: #fb929e;
//fb929e;;ff847c;ffaaa5
color: #dd1811;
height: 100vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
h1{
  font-family: 'Pacifico', cursive;
}
& > button{
  background-color:${({theme})=> theme.primary}
}


& > form{
  background-color: ${({ theme }) => theme.elevation_1};
  border-radius: 5px;
  height: 400px;
  width:90%;
  max-width:500px;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: ${({theme})=> theme.shadow};


}
`


export const SignUpButton = styled.button`

display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.3rem;
  width: 90%;
  max-width: 250px;
  height: 15%;
  border-radius: 3px;
  appearance: none;
  --moz-appearance: none;
  --webkit-appearance: none;
  border: 0;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  &:focus,
  &:hover {
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    border: 0;
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export default StyledSignUp
