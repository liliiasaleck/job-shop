import {actionsTypes} from './../actions/actionsTypes';

const initState = {
  authError: null,
  userJWT: '',
};

const authReducer = (state = initState, action) => {
  const {payload} = action;
  switch (action.type) {
    case actionsTypes.SIGNUP_USER_ERROR:
      return {...state, authError: 'Register Failed'};
    case actionsTypes.SIGNUP_USER:
      return {...state, authError: null};
    case actionsTypes.LOGIN_USER_ERROR:
      return {...state, authError: 'Login Failed'};
    case actionsTypes.LOGIN_USER:
      return {...state, authError: null};
    default:
      return state;
  }
};

export default authReducer;
