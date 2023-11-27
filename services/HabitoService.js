import axios from "axios";


export async function listarHabitos(id){
    try {
        const response = await axios.get(`http://3.90.51.196:8080/habitos/user/${id}`);
        return {habitos: response.data};
    } catch(error) {
        console.log('Erro na requisição de listar habitos', error);
    }
}

export async function criarHabito(dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/habitos', dados);
    } catch (error) {
        console.error('Erro na requisição de criar habito', error);
    }
}