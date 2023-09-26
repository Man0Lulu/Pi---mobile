import { useContext } from "react";
import AppRoute from "./AppRoute";
import AutenticacaoRoute from "./AutenticacaoRoute";
import UserContext from "../contexts/UserContext";


const Routes = () => {
    const { logado } = useContext(UserContext);
    
    return logado ? <AppRoute /> : <AutenticacaoRoute />;
};

export default Routes;