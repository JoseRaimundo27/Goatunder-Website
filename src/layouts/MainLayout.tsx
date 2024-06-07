import React from 'react'
import style from './mainLayout.module.scss'
// Layout geral (usando os components) iguais no home e no login

interface MainLayoutProps {
    children: React.ReactNode;
  }

const MainLayout : React.FC<MainLayoutProps>  = ({children}) => {
  return (
    <section className={style.container}>
      <div>{children}</div>
    </section>
  )
}

export default MainLayout