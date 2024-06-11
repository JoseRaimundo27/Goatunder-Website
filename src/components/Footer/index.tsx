import style from './Footer.module.scss'
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`footer ${style.footer} `}>
        <h3><FaCopyright fontSize={14}/> GoatUnder</h3>
        <p> GOAT UNDER - 2024. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer;