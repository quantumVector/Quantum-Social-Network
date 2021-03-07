const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-DATA': {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email }
})

export default authReducer;