import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'quantum_network/app/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'quantum_network/app/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

export const initializedSuccess = () => (
  { type: INITIALIZED_SUCCESS }
);

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());

  Promise.all([promise])
  .then(() => {
    dispatch(initializedSuccess());
  });
}

export default appReducer;