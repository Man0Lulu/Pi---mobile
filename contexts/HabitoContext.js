import { createContext, useState } from "react";
import { criarHabito, listarHabitos } from "../services/HabitoService";

const HabitoContext = createContext({
    handleCriarHabito: () => { },
    handleListarHabitos: () => { },
})

export const HabitoContextProvider = ({ children }) => {
    const [habitos, setHabitos] = useState([]);

    const handleListarHabitos = async (id) => {
        response = await listarHabitos(id);
        if (response) {
            setHabitos(response.habitos);
        }
    }

    const handleCriarHabito = async (id,nome, alarme, horario, data, selectedImage) => {
        const dados = {
            usuarioId: id,
            nome: nome,
            dataInicio: data,
            horarioAlarme: horario,
            tocarAlarme: alarme,
            imagem: selectedImage
        }

        response = await criarHabito(dados)
    }


    const contexto = {
        handleCriarHabito,
        habitos,
        handleListarHabitos,
    }

    return (
        <HabitoContext.Provider value={contexto}>
            {children}
        </HabitoContext.Provider>
    )

}

export default HabitoContext;