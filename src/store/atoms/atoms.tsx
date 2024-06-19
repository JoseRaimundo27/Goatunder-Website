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

export const passwordRegister1State = atom<string>({
    key: 'passwordRegister1State',
    default: ''
})

export const passwordRegister2State = atom<string>({
    key: 'passwordRegister2State',
    default: ''
})
