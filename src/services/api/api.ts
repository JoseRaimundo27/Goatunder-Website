import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'aplication/json',
        Content: 'aplication/json'
    }
})

export const setupInterceptors = (getAuthState: () => { user: any, token: string | null }) => {
    api.interceptors.request.use(
        (config) => {
            const auth = getAuthState();
            if (auth.token) {
                config.headers.Authorization = `Bearer ${auth.token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};