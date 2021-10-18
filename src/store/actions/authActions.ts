import api from '../../api/baseURL';
import {actionsTypes} from './actionsTypes';

export const signUp = ({email, password}) => {
  return (dispatch, getState) => {
    api
      .post('/auth/signup', {email, password})
      .then((res) => {
        console.log(res);

        dispatch({type: actionsTypes.SIGNUP_USER, payload: res.data});
      })
      .catch((err) => {
        console.log(err);

        dispatch({type: actionsTypes.SIGNUP_USER_ERROR, err});
      });
  };
};
export const signIn = ({email, password}) => {
  return (dispatch, getState) => {
    console.log('signin action');

    api
      .post('/auth/signin', {email, password})
      .then((res) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.data));

        dispatch({type: actionsTypes.LOGIN_USER, payload: res.data});
      })
      .catch((err) => {
        console.log('signin error');
        console.log(err);

        dispatch({type: actionsTypes.LOGIN_USER_ERROR, err});
      });
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
