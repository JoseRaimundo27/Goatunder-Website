import { useSetRecoilState } from "recoil"
import { isLoginState } from "../store"
import { useEffect } from "react";

export const useSetLoginState = (isLogin : boolean) => {
    const setIsLogin = useSetRecoilState(isLoginState);
    useEffect( () => {
        setIsLogin(isLogin)
    }, [setIsLogin, isLogin]) // Vou passar esse array de dependencias apenas como boas práticas
}

