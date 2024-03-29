import photoShepard from '../assets/profiles/Shepard-mini.png';
import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_PROFILE = 'quantum_network/profile/SET_USER_PROFILE';
const SET_STATUS = 'quantum_network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'quantum_network/profile/SAVE_PHOTO_SUCCESS';

const initialState = {
  profile: null,
  name: 'John Shepard',
  photo: photoShepard,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'quantum_network/profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'quantum_network/profile/SET_STATUS': {
      return { ...state, status: action.status };
    }
    case 'quantum_network/profile/SAVE_PHOTO_SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photos } }
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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userId);

  dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);

  dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.log(error)
  }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfileInfo(profileInfo);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile-info", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;