import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { UserContextProvider } from './contexts/UserContext';
import Routes from './routes/Routes';


const App = () => {

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </NavigationContainer>
  );
};

export default App;