import { createContext, useState } from "react";

 const UserContext = createContext( {
    userId: null,
    logado: false,
    handleLogin: () => { },
    handleLogout: () => { },
})

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ userId: null, logado: false })
    
    const handleLogin = (email,senha) => {
        setCurrentUser({ userId: 1, logado: true })
    }

    const handleLogout = () => {
        setCurrentUser({ userId: null, logado: false })
    }
    
    const contexto = {
        userId: currentUser.userId,
        logado: currentUser.logado,
        handleLogin,
        handleLogout,
    }

    return(
        <UserContext.Provider value={contexto}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;