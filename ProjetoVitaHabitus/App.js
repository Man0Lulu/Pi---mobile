import Splash from './screens/Splash';
import Login from './screens/Login';
import { useState, useEffect } from 'react';
import Home from './screens/Home';

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
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
