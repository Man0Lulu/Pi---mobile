import { createContext, useState } from "react";
import { criarUsuario, autenticaUsuario, alterarImagemPerfil, TrocarSenha } from "../services/AuthService";

 const UserContext = createContext( {
    userId: null,
    logado: false,
    fotoPerfil: null,
    handleLogin: () => { },
    handleLogout: () => { },
})

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ userId: null, email:null, nome: null, dataNascimento: null, logado: false })
    const [fotoPerfil, setFotoPerfil] = useState(null);
    
    const handleLogin = async (email,senha) => {
        const data = {
            email,
            senha
        }
        const auth = await autenticaUsuario(data);
        
        if(auth && auth.id) {
         setCurrentUser({ userId: auth.id, email: auth.email, nome: auth.nome, dataNascimento: auth.dataNascimento, logado: true })
         setFotoPerfil(auth.fotoPerfil)
        } else {
            console.log("Erro na autenticação");
        }
    }

    const handleLogout = () => {
        setCurrentUser({ userId: null, email:null, nome: null, dataNascimento: null, logado: false })
        setFotoPerfil(null)
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

    const handleAlterarFoto = (imagem) => {
        const data = {
            id: currentUser.userId,
            image: imagem
        }
        setFotoPerfil(imagem)
        alterarImagemPerfil(data)
    }

    const handleTrocarSenha = async (senhaAtual, novaSenha) => {
        const data = {
            id: currentUser.userId,
            senhaAtual,
            novaSenha
        }
        const response = await TrocarSenha(data)
        if(response) {
            handleLogout()
        } else {
            console.error("Senha inválida")
        }
    }
    
    const contexto = {
        usuario: currentUser,
        foto: fotoPerfil,
        userId: currentUser.userId,
        logado: currentUser.logado,
        handleLogin,
        handleLogout,
        handleCadastrar,
        handleAlterarFoto,
        handleTrocarSenha,
    }

    return(
        <UserContext.Provider value={contexto}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;