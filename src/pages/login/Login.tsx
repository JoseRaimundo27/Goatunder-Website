import LoginForm from '../../components/LoginForm/index.tsx';
import RegisterForm from '../../components/RegisterForm/index.tsx';
import { useSetLoginState } from '../../hooks/useSetLoginState.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'
import style from './Login.module.scss'

const Login: React.FC = () => {

  useSetLoginState(true);

  return (
    <MainLayout >
      <main className={style.loginMain}>
        <LoginForm />
        <RegisterForm />
      </main>

    </MainLayout>
  )
}

export default Login