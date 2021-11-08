import {loginUser, registerUser} from '../../services/auth.service';
import api from '../../api/baseURL';
import {actionsTypes} from './actions-types';

export const signUp = ({email, password}) => {
  return async (dispatch, getState) => {
    try {
      const response = await registerUser({email, password});
      dispatch({type: actionsTypes.SIGNUP_USER, payload: response.data});
    } catch (err) {
      dispatch({type: actionsTypes.SIGNUP_USER_ERROR, err});
    }
  };
};

export const signIn = ({email, password}) => {
  return async (dispatch, getState) => {
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
  return (dispatch, getState) => {
    dispatch({type: actionsTypes.LOGOUT_USER});
  };
};

export const redirect = () => {
  return (dispatch, getState) => {
    dispatch({type: actionsTypes.REDIRECT_USER});
  };
};
