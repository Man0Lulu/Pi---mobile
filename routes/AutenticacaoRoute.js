import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoasVindas from "../screens/BoasVindas";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro"
import Perfil from "../screens/Perfil";
import CriarHabito from "../screens/CriarHabito";
import AlterarHabito from "../screens/AlterarHabito"

const Stack = createNativeStackNavigator();
const AutenticacaoRoute = () => (
    <Stack.Navigator>
            <Stack.Screen name="BoasVindas" component={BoasVindas} options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
            <Stack.Screen name="Perfil" options={{ headerShown: false }} component={Perfil} />
            <Stack.Screen name="CriarHabito" options={{ headerShown: false }} component={CriarHabito} />
            <Stack.Screen name="AlterarHabito" options={{ headerShown: false }} component={AlterarHabito} />
    </Stack.Navigator>
);

export default AutenticacaoRoute;