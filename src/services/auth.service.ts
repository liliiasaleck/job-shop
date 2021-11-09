import { AxiosResponse } from 'axios';
import api from '../api/baseURL';

const AUTH_API = 'auth';

export type UserInfo = {
  email: string;
  password: string;
};

export const loginUser = ({email, password}: UserInfo): any =>
  api.post(`${AUTH_API}/signIn`, {email, password});

export const registerUser = ({email, password}: UserInfo): any =>
  api.post(`${AUTH_API}/signUp`, {email, password});
