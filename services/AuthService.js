import axios from "axios";

export async function criarUsuario (dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users', dados);
        console.log('resposta da api: ', response.data);
    } catch (error) {
        console.error('Erro na requisição', error);
    }
} 
export async function autenticaUsuario (dados) {
    try {
    const response = await axios.post('http://3.90.51.196:8080/users/auth', dados);
    console.log('resposta: ', response.data);
        if(response.data == true) {
            return true;
        } else {
            false;
        }
} catch (error) {
    return false;
}
}