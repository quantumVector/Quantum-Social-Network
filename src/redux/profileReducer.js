import photoShepard from '../assets/profiles/Shepard-mini.png';
import { profileAPI } from '../api/api';

const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  profile: null,
  name: 'John Shepard',
  photo: photoShepard,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-PROFILE': {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.setUserProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
}

export default profileReducer;