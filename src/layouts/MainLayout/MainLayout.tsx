import React from 'react'
import style from './mainLayout.module.scss'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// Layout geral (usando os components) iguais no home e no login

interface MainLayoutProps {
    isLogin?: boolean,
    children: React.ReactNode;
  }

const MainLayout : React.FC<MainLayoutProps>  = ({isLogin = false,children}) => {
  return (
    <section className={style.container}>
      <Header isLogin={isLogin} />
      <div className={style.container__main}>{children}</div>
      <Footer />
    </section>
  )
}

export default MainLayout