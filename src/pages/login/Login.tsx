import LoginForm from '../../components/LoginForm/index.tsx';
import RegisterForm from '../../components/RegisterForm/index.tsx';
import { useRedirectIfAuthenticated } from '../../hooks/useRedirectIfAuthenticated.tsx';
import { useSetShortMenu } from '../../hooks/useSetShortMenu.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'
import style from './Login.module.scss'

const Login: React.FC = () => {

  useSetShortMenu(true);

  useRedirectIfAuthenticated('/admin')

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