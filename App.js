import { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

import Login from './screens/Login';
import Home from './screens/Home';

const temaDoAplicativo = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F2E6E6',
  },
};

const App = () => {
  const [logado, setLogado] = useState(false);

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  if (!fontsLoaded) {
    return;
  }

  return (
    <PaperProvider theme={temaDoAplicativo}>
      {logado ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </PaperProvider>
  );
};

export default App;