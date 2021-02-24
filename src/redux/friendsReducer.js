/*
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png'; */

const UNFRIEND = 'UNFRIEND';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';

const initialState = {
  friends: [],
  pageSize: 4,
  totalFriendsCount: 0,
  currentPage: 1,
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
      return { ...state, friends: action.friends };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET-TOTAL-FRIENDS-COUNT':
      return { ...state, totalFriendsCount: action.totalCount };
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

export const setCurrentPageCreator = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  }
}

export const setTotalFriendsCountCreator = (totalCount) => {
  return {
    type: SET_TOTAL_FRIENDS_COUNT,
    totalCount,
  }
}

export default friendsReducer;