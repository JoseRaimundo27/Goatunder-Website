import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'

const Login : React.FC = () => {
  return (
    <MainLayout isLogin={true}>
      <div>Restante do Login</div>
    </MainLayout>
  )
}

export default Login