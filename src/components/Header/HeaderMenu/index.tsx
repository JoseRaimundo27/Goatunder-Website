import React from 'react'
import style from '../Header.module.scss'
import { useRecoilValue } from 'recoil'
import { isLoginState } from '../../../store'


const HeaderMenu : React.FC = ( ) => {
    const isLogin = useRecoilValue(isLoginState) 
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

