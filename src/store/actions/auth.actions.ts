import {loginUser, registerUser, UserInfo} from '../../services/auth.service';
import api from '../../api/baseURL';
import {actionsTypes} from './actions.types';
import { Dispatch } from 'react';
import { IAuthAction } from '../../interfaces/action-types.interface';

export const signUp = ({email, password}: UserInfo) => {
  return async (dispatch: Dispatch<IAuthAction>) => {
    try {
      const response = await registerUser({email, password});
      dispatch({type: actionsTypes.SIGNUP_USER, payload: response.data});
    } catch (err) {
      dispatch({type: actionsTypes.SIGNUP_USER_ERROR, err});
    }
  };
};

export const signIn = ({email, password}: UserInfo) => {
  return async (dispatch: Dispatch<IAuthAction>) => {
    try {
      const response = await loginUser({email, password});
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch({type: actionsTypes.LOGIN_USER, payload: response.data});
    } catch (err) {
      dispatch({type: actionsTypes.LOGIN_USER_ERROR, err});
    }
  };
};

export const signOut = () => {
  localStorage.removeItem('user');
  return (dispatch: Dispatch<IAuthAction>) => {
    dispatch({type: actionsTypes.LOGOUT_USER});
  };
};

export const redirect = () => {
  return (dispatch: Dispatch<IAuthAction>) => {
    dispatch({type: actionsTypes.REDIRECT_USER});
  };
};

export const clearMessage = () => {
  return (dispatch: Dispatch<IAuthAction>) => {
    dispatch({type: actionsTypes.CLEAR_MESSAGE});
  };
};
