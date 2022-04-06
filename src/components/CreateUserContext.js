import {creatContext, useState} from 'react';
//mind-body-spirit
//how important to stay healthy
export const UserContext = createContext([loggedIn: false])


const Context = ({users}) => {

  const [user, setUser] = useState(() => ({
    loggedIn: false,
  }))

  return(
  <UserContext.Provider
  value={user}>{users}
  </UserContext.Provider>
  )
}

export default CreateUserContext
