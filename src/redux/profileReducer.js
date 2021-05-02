import photoShepard from '../assets/profiles/Shepard-mini.png';
import { profileAPI } from '../api/api';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  profile: null,
  name: 'John Shepard',
  photo: photoShepard,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'SET-STATUS': {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}

export default profileReducer;