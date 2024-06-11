import style from '../Header.module.scss'

const HeaderMenu = () => {
    return (
        <ul className={style.header__menu}>
            <li className={style.header__menu__item}>
                <a href={"/"}>Inicio</a>
            </li>
            <li className={style.header__menu__item}>
                <a href={"#aboutUs"}>Sobre nós</a>
            </li>
            <li className={style.header__menu__item}>
                <a href={"#contato"}>Contato</a>
            </li>
        </ul>
    )
}

export default HeaderMenu

