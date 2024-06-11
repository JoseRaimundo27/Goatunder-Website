import style from '../Header.module.scss'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare, FaInstagramSquare, FaUser  } from "react-icons/fa";

const MenuIcones = () => {
    return (
        <ul className={style.menuIcones}>
            <li className={style.header__menuIcones__item}>
                <Link className={style.icones__link} to={"/login"}><FaUser /></Link>
            </li>
            <li className={style.header__menuIcones__item}>
                <a href="https://api.whatsapp.com/send/?phone=5571996086112&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsappSquare fontSize={40} /></a>
            </li>
            <li className={style.header__menuIcones__item}>
                <a href="https://www.instagram.com/goatunder.co/" target="_blank" ><FaInstagramSquare fontSize={40} /></a>
            </li>
        </ul>
    )
}

export default MenuIcones