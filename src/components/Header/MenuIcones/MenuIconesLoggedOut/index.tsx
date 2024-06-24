import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaWhatsapp, FaInstagram } from "react-icons/fa";
import style from '../../Header.module.scss';

const MenuIconesLoggedOut: React.FC = () => {
  return (
    <ul className={style.menuIcones}>
      <li className={style.header__menuIcones__item}>
        <Link className={style.icones__link} to={"/login"}>
          <div className={style.iconContainer}><FaUser /></div>
        </Link>
      </li>
      <li className={style.header__menuIcones__item}>
        <a href="https://api.whatsapp.com/send/?phone=5571996086112&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <div className={style.iconContainer}>
            <FaWhatsapp fontSize={40} />
          </div>
        </a>
      </li>
      <li className={style.header__menuIcones__item}>
        <a href="https://www.instagram.com/goatunder.co/" target="_blank" rel="noopener noreferrer">
          <div className={style.iconContainer}><FaInstagram fontSize={40} /></div>
        </a>
      </li>
    </ul>
  );
};

export default MenuIconesLoggedOut;
