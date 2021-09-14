import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'quantum_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'quantum_network/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'quantum_network/auth/SET_USER_DATA':
    case 'quantum_network/auth/GET_CAPTCHA_URL_SUCCESS': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth }
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;

    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)

  if (response.data.resultCode === 0) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;