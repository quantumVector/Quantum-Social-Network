/*
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png'; */

const UNFRIEND = 'UNFRIEND';
const SET_FRIENDS = 'SET-FRIENDS';

const initialState = {
  friends: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UNFRIEND':
      return {
        ...state,
        friends: state.friends.map(user => {
          if (user.id === action.userId) {
            return { ...user, inFriends: false }
          };

          return user;
        })
      };
    case 'SET-FRIENDS':
      return {...state, friends: action.friends};
    default:
      return state;
  }
}

export const unfriendActionCreator = (userId) => {
  return {
    type: UNFRIEND,
    userId,
  }
}

export const setFriendsActionCreator = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  }
}

export default friendsReducer;