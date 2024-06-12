import React from 'react'
import style from '../Header.module.scss'

interface HeaderMenuProps {
    isLogin?: boolean
}

const HeaderMenu : React.FC<HeaderMenuProps> = ( {isLogin = false} ) => {
    return (
        <ul className={style.header__menu}>
            <li className={style.header__menu__item}>
                <a href={"/"}>Inicio</a>
            </li>
            <li style={{display: isLogin ? 'none' : 'block'}} className={style.header__menu__item}>
                <a href={"#aboutUs"}>Sobre nós</a>
            </li>
            <li style={{display: isLogin ? 'none' : 'block'}} className={style.header__menu__item}>
                <a href={"#contato"}>Contato</a>
            </li>
        </ul>
    )
}

export default HeaderMenu

