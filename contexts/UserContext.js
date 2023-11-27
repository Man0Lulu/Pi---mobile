import { createContext, useState } from "react";
import { criarUsuario, autenticaUsuario, deletarUsuario } from "../services/AuthService";
import { alterarImagemPerfil, TrocarSenha } from "../services/UsuarioService";

const UserContext = createContext({
    userId: null,
    logado: false,
    fotoPerfil: null,
    handleLogin: () => { },
    handleLogout: () => { },
})

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ userId: null, email:null, nome: null, dataNascimento: null, logado: true })
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
    const handleCadastrar = (nome, email, dataNascimento, senha) => {
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

    const handleDeletarUsuario = async (id) => {
       const response = await deletarUsuario(id);
        if (response) {
            handleLogout();
        }
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
        handleDeletarUsuario,
    }

    return (
        <UserContext.Provider value={contexto}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;