import React from 'react'
import style from './mainLayout.module.scss'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MainLayoutProps } from '../../types';
// Layout geral (usando os components) iguais no home e no login

const MainLayout : React.FC<MainLayoutProps>  = ({children}) => {
  return (
    <section className={style.container}>
      <Header />
      <div className={style.container__main}>{children}</div>
      <Footer />
    </section>
  )
}

export default MainLayout