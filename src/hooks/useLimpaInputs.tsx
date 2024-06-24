import { useSetRecoilState } from "recoil"
import { passwordLoginState, usernameLoginState } from "../store"


export const useLimpaInputs = () => {
    const setUsername = useSetRecoilState(usernameLoginState)
    const setPassword = useSetRecoilState(passwordLoginState)

    const limpaInputs = () => {
        setUsername('')
        setPassword('')
    }

    return limpaInputs;

}