import { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';

const temaDoAplicativo = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(165, 102, 139, 0.9)',
  },
};


const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);

  return exibeSplash ? (

    <Splash />
  ) : logado ? (
    <PaperProvider theme={temaDoAplicativo}>
      <Home onLogout={handleLogout} />
    </PaperProvider>
  ) : (
    <PaperProvider theme={temaDoAplicativo}>
      <Login onLogin={handleLogin} />
    </PaperProvider>
  );
};



export default App;