import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useIsAuth } from "./useIsAuth";

export const useRedirectIfAuthenticated = (redirectTo: string = '/admin') => {
    const isAuth = useIsAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate(redirectTo)
        }
    }, [isAuth, navigate])
}