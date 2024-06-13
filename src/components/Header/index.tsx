import React from 'react'
import style from './Header.module.scss'
import Logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import MenuIcones from './MenuIcones'
import HeaderMenu from './HeaderMenu';
import classNames from 'classnames';
import { useScrollPosition } from '../../hooks'



export const Header: React.FC = () => {
  const scrollPos = useScrollPosition()
  
  return (
    <div className={`${scrollPos < 25 ? style.header :  classNames(style.header, style.transparente)}`}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo Goatunder" />
      </Link>
    <HeaderMenu />
    <MenuIcones/>
    </div>
  )
}

export default Header; 