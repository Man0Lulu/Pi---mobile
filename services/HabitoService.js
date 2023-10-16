import axios from "axios";


export async function criarHabito(dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/habitos', dados);
        console.log('resposta da api: ', response.data);
    } catch (error) {
        console.error('Erro na requisição de criar habito', error);
    }
}