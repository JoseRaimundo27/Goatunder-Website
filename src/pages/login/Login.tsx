import LoginForm from '../../components/LoginForm/index.tsx';
import { useSetLoginState } from '../../hooks/useSetLoginState.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'


const Login: React.FC = () => {

  useSetLoginState(true);

  return (
    <MainLayout >
      <LoginForm/>
    </MainLayout>
  )
}

export default Login