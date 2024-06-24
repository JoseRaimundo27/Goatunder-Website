import { useSetRecoilState } from "recoil";
import { authState } from "../store";

export const useSaveToken = () => {
    const setAuth = useSetRecoilState(authState)

    const saveToken = (usuario : Iusuario , token: string ) => {
        localStorage.setItem('authToken', token);
        setAuth({
            user: usuario,
            token: token
        })
    }
    
    return saveToken
}

