import {createContext, useState} from 'react';
//mind-body-spirit
//how important to stay healthy


export const UserContext = createContext({loggedIn: false})

//source
//https://www.youtube.com/watch?v=oEDrU_lCxoU&list=PLBieMfwfePY8wOyuGlANlcmmyPgQ4HLVe&index=4

//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_context1

//context is like passing props. We are wrapping our app in context or what ever parents and all children would have access to that value
const Context = ({children}) => {

  const [user, setUser] = useState(() => ({
    loggedIn: false,
  }))

  return(
  <UserContext.Provider
  value={user}>{children}
  </UserContext.Provider>
  )
}

export default Context
