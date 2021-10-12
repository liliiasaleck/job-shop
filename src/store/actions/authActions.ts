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
    api
      .post('/auth/signin', {email, password})
      .then((res) => {
        console.log(res);

        dispatch({type: actionsTypes.LOGIN_USER, payload: res.data});
      })
      .catch((err) => {
        dispatch({type: actionsTypes.LOGIN_USER_ERROR, err});
      });
  };
};
