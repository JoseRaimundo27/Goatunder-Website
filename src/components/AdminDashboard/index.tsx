import React, { useEffect, useState } from 'react';
import { api } from '../../services';
import { AxiosError } from 'axios';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<Iusuario[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    // Faz a chamada à API quando o componente é montado
    api.get('/users')
      .then((res) => {
        setUsers(res.data); // Supondo que os dados dos usuários estão em res.data
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []); // O array de dependências vazio garante que o useEffect seja executado apenas uma vez, na montagem

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (users) {
    return (
        <div>
          <h1>Admin Dashboard</h1>
          <ul>
            {users.map((user) => (
              <li key={user.password}>{user.password}</li> // Ajuste conforme a estrutura dos dados do usuário
            ))}
          </ul>
        </div>
      );
    };
  }

  

export default AdminDashboard;
