import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../store';

const useInitializeAuth = () => {
  const [auth,setAuth] = useRecoilState(authState);
  const user = auth.user
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        // Assumindo que você tem uma maneira de obter o username
        setAuth({ token,  user}); // Defina o username de acordo com sua lógica
      }

    
  }, [setAuth]);
};

export default useInitializeAuth;