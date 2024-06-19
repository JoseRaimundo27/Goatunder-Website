import { useSetRecoilState } from "recoil";
import { authState } from "../store";


export const useSaveToken = () => {
    const setAuth = useSetRecoilState(authState)

    const saveToken = (usuario : Iusuario | null, token: string | null) => {
        setAuth({
            user: usuario,
            token: token
        })
    }
    
    return saveToken
}

