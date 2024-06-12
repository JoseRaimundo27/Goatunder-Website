import React, { useEffect, useState } from 'react'
import style from './Header.module.scss'
import Logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import MenuIcones from './MenuIcones'
import HeaderMenu from './HeaderMenu';
import classNames from 'classnames';

interface HeaderProps {
  isLogin? : boolean
}

export const Header: React.FC<HeaderProps> = ({isLogin = false}) => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Definir o estado inicial
    handleScroll();

    // Cleanup do listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`${scrollPos < 25 ? style.header :  classNames(style.header, style.transparente)}`}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo Goatunder" />
      </Link>
    <HeaderMenu isLogin={isLogin}/>
    <MenuIcones/>
    </div>
  )
}

export default Header; 