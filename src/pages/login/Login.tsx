import { useSetLoginState } from '../../hooks/useSetLoginState.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'


const Login: React.FC = () => {

  useSetLoginState(true);

  return (
    <MainLayout >
      <div>Restante do Login</div>
    </MainLayout>
  )
}

export default Login