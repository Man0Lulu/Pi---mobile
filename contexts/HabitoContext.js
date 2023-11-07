import { createContext, useContext } from "react";
import UserContext from "./UserContext";

const HabitoContext = createContext( {
    userId: null,
    handleCriarHabito: () => { },
})

export const HabitoContextProvider = ({children}) => {
    const { usuario } = useContext(UserContext);

    const handleCriarHabito = (nome,alarme,horario,data, selectedImage) => {
        console.log("Chegou. ", nome,alarme,horario,data, selectedImage);
        console.log(usuario);
        
    }


    const contexto = {
        handleCriarHabito,
    }

    return(
        <HabitoContext.Provider value={contexto}>
            {children}
        </HabitoContext.Provider>
    )

}   

export default HabitoContext;