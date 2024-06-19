import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'aplication/json',
        Content: 'aplication/json'
    }
})
