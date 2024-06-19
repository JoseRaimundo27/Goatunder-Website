import { useSetRecoilState } from "recoil"
import { authState } from "../store"
import { useNavigate } from "react-router-dom"

const useLogout = () => {
    const setAuth = useSetRecoilState(authState)
    const navigate = useNavigate()

    const logout = () => {
        setAuth({
            token:null,
            user: null
        })
        navigate('/login')
    }

    return logout
}

export default useLogout