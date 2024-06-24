import { useRecoilValue } from "recoil"
import { authState } from "../store"

export const useIsAuth = () : boolean => {
    const auth = useRecoilValue(authState)
    return auth.token? true: false
}