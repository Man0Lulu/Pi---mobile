import axios from "axios";

export async function criarUsuario(dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users', dados);
    } catch (error) {
        console.error('Erro na requisição de Criar Usuário', error);
    }
}

export async function autenticaUsuario(dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users/auth', dados);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição de Autenticar', error);
        return false;
    }
}

export async function alterarImagemPerfil(dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users/uploadProfileImage', dados);
    } catch (error) {
        console.error('Erro na requisição de salvar imagem', error);

    }
}

export async function TrocarSenha(dados) {
    try {
        const response = await axios.put('http://3.90.51.196:8080/users', dados);
        return true
    } catch (error) {
        console.error('Erro na requisição de trocar senha', error);
        return false
    }
}

export async function deletarUsuario(id) {
    try {
        const response = await axios.delete(`http://3.90.51.196:8080/users/${id}`);
        if (response.status === 204) {
            return true;
        } else {
            console.error('Erro na exclusão do usuário. Status:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Erro na requisição de Autenticar', error);
        return false;
    }
}