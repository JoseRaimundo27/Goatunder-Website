import { useSetRecoilState } from "recoil"
import { isShortMenuState } from "../store"
import { useEffect } from "react";

export const useSetShortMenu = (isLogin : boolean) => {
    const setIsLogin = useSetRecoilState(isShortMenuState);
    useEffect( () => {
        setIsLogin(isLogin)
    }, [setIsLogin, isLogin]) // Vou passar esse array de dependencias apenas como boas práticas
}

