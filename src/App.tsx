import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import { useRecoilValue } from 'recoil';
import { setupInterceptors } from './services';
import { authState } from './store';
import useInitializeAuth from './hooks/useInitializeAuth';

const App: React.FC = () => {
  //Configura o token no header das requisições do usuário?
  const auth = useRecoilValue(authState);
  useEffect(() => {
      setupInterceptors(() => auth);
  }, [auth]);
  
  useInitializeAuth() // Carrega o token do localStorage ao inicializar
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;