import api from '../api/baseURL';

const AUTH_API = 'auth';

export const loginUser =({email, password}) :any =>
    api.post(`${AUTH_API}/signIn`, {email, password});


export const registerUser =({email, password}) :any =>
    api.post(`${AUTH_API}/signUp`, {email, password});