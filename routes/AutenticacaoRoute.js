import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoasVindas from "../screens/BoasVindas";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();
const AutenticacaoRoute = () => (
    <Stack.Navigator>
            <Stack.Screen name="BoasVindas" component={BoasVindas} options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
    </Stack.Navigator>
);

export default AutenticacaoRoute;