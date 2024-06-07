import React from 'react'
import style from './mainLayout.module.scss'
import Header from '../components/Header';
// Layout geral (usando os components) iguais no home e no login

interface MainLayoutProps {
    children: React.ReactNode;
  }

const MainLayout : React.FC<MainLayoutProps>  = ({children}) => {
  return (
    <section className={style.container}>
      <Header />
      <div>{children}</div>
    </section>
  )
}

export default MainLayout