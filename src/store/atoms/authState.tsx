import { atom } from "recoil";

export const authState= atom<IauthState>({
    key: 'authState',
    default: {
        token: null,
        user: null
    }
})

