import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useIsAuth } from "./useIsAuth";

export const useRedirectIfNotAuthenticated = (redirectTo: string = '/login') => {
    const isAuth = useIsAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate(redirectTo)
        }
    }, [isAuth, navigate])
}