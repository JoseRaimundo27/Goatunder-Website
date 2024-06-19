import { atom } from "recoil";

export const isShortMenuState = atom<boolean>({
    key: 'isShortMenu',
    default: false
})

export const usernameLoginState = atom<string>({
    key: 'usernameLoginState',
    default: ''
})

export const usernameRegisterState = atom<string>({
    key: 'usernameRegisterState',
    default: ''
})

export const passwordLoginState = atom<string>({
    key: 'passwordLoginState',
    default: ''
})

export const passwordRegisterState = atom<string>({
    key: 'passwordRegisterState',
    default: ''
})
