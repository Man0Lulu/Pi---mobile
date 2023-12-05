import { createContext, useState } from "react";
import { criarHabito, listarHabitos, deletarHabito } from "../services/HabitoService";

const HabitoContext = createContext({
    handleCriarHabito: () => { },
    handleAlterarHabito: () => { },
    handleListarHabitos: () => { },
    handleDeletarHabito: () => { },
})

export const HabitoContextProvider = ({ children }) => {
    const [habitos, setHabitos] = useState([]);

    const handleListarHabitos = async (id) => {
        response = await listarHabitos(id);
        if (response) {
            setHabitos(response.habitos);
        }
    }

    const handleCriarHabito = async (id, nome, alarme, horario, data, selectedImage) => {
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

    const handleDeletarHabito = async (id) => {
        await deletarHabito(id);
        setHabitos(habitos.filter((habito) => habito.id !== id));
    }

    const handleAlterarHabito = (habitoId, nome, alarme, horario, data, selectedImage) => {
    }

    const contexto = {
        handleCriarHabito,
        habitos,
        handleListarHabitos,
        handleAlterarHabito,
        handleDeletarHabito
    }

    return (
        <HabitoContext.Provider value={contexto}>
            {children}
        </HabitoContext.Provider>
    )

}

export default HabitoContext;