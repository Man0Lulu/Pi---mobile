import { createContext, useState } from "react";
import { criarUsuario, autenticaUsuario } from "../services/AuthService";

 const UserContext = createContext( {
    userId: null,
    logado: false,
    handleLogin: () => { },
    handleLogout: () => { },
})

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ userId: null, logado: false })
    
    const handleLogin = async (email,senha) => {
        const data = {
            email,
            senha
        }

        const auth = await autenticaUsuario(data);
        console.log("auth valor: ",auth);
        
        if(auth == true) {
         setCurrentUser({ userId: 1, logado: true })
        } else {
            console.log("Erro na autenticação");
        }
    }

    const handleLogout = () => {
        setCurrentUser({ userId: null, logado: false })
    }
    const handleCadastrar = (nome,email,dataNascimento,senha) => {
        const data = {
            nome,
            email,
            dataNascimento,
            senha,
        }
        criarUsuario(data);
    }
    
    const contexto = {
        userId: currentUser.userId,
        logado: currentUser.logado,
        handleLogin,
        handleLogout,
        handleCadastrar,
    }

    return(
        <UserContext.Provider value={contexto}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;