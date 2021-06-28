export const initialState = {
  user: 'Unlogin user',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'loginUser':
      return {...state, isUserLogged: true};
    case 'logoutUser':
      return {...state, isUserLogged: false};
    default:
      return state;
  }
}
