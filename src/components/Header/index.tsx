import React from 'react'
import style from './Header.module.scss'

export  const Header: React.FC  = () => {
  return (
    <div className={style.header}>
        <img src="\logo.svg" alt="Logo Goatunder" />
    </div>
  )
}

export default Header; 