import React from 'react'
import style from './Header.module.scss'
import Logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare, FaInstagramSquare, FaUser  } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo Goatunder" />
      </Link>

      <ul className={style.header__menu}>
        <li className={style.header__menu__item}>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className={style.header__menu__item}>
          <Link to={"/produtos"}>Produtos</Link>
        </li>
        <li className={style.header__menu__item}>
          <Link to={"/contato"}>Contato</Link>
        </li>
      </ul>

      <ul className={style.menuIcones}>
        <li className={style.header__menuIcones__item}>
          <Link to={"/login"}><FaUser /></Link>
        </li>
        <li className={style.header__menuIcones__item}>
          <a href="https://api.whatsapp.com/send/?phone=5571996086112&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsappSquare fontSize={40}/></a>
        </li>
        <li className={style.header__menuIcones__item}>
          <a href="https://www.instagram.com/goatunder.co/" target="_blank" ><FaInstagramSquare fontSize={40}/></a>
        </li>
      </ul>

    </div>
  )
}

export default Header; 