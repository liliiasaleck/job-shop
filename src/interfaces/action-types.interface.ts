export interface IActions {
    SIGNUP_USER: string;
    SIGNUP_USER_ERROR: string;
    SET_OFFERS: string;
    SET_OFFERS_ERROR: string;
    SEARCH_OFFER_BY_NAME: string;
    FETCH_OFFERS: string;
    FETCH_OFFERS_ERROR: string;
    ADVANCED_FILTER: string;
    LOGIN_USER: string;
    LOGIN_USER_ERROR: string;
    LOGOUT_USER: string;
    REDIRECT_USER: string;
    CLEAR_MESSAGE: string;
    RESET_FILTERS: string;
    SELECT_OFFER: string;
    UPLOAD_LOGO: string;
    UPLOAD_LOGO_ERROR: string;
  }
  
  export interface IAuthAction {
    type:
      | IActions['SIGNUP_USER']
      | IActions['SIGNUP_USER_ERROR']
      | IActions['LOGIN_USER']
      | IActions['LOGIN_USER_ERROR']
      | IActions['LOGOUT_USER']
      | IActions['REDIRECT_USER']
      | IActions['CLEAR_MESSAGE'];
    payload?: {};
    err?: string | unknown;
  }
  
  export interface IOffersAction {
    type:
      | IActions['FETCH_OFFERS']
      | IActions['FETCH_OFFERS_ERROR']
      | IActions['SET_OFFERS']
      | IActions['SET_OFFERS_ERROR']
      | IActions['SEARCH_OFFER_BY_NAME']
      | IActions['RESET_FILTERS']
      | IActions['ADVANCED_FILTER']
      | IActions['SELECT_OFFER']
      | IActions['UPLOAD_LOGO']
      | IActions['UPLOAD_LOGO_ERROR'];
    payload?: {};
    err?: string | unknown;
  }