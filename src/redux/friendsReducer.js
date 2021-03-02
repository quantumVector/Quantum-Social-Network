/*
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png'; */

const UNFRIEND = 'UNFRIEND';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
  friends: [],
  pageSize: 4,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
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
      return { ...state, currentPage: action.pageNumber };
    case 'SET-TOTAL-FRIENDS-COUNT':
      return { ...state, totalFriendsCount: action.totalCount };
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
}

export const unfriend = (userId) => {
  return {
    type: UNFRIEND,
    userId,
  }
}

export const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  }
}

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  }
}

export const setTotalFriendsCount = (totalCount) => {
  return {
    type: SET_TOTAL_FRIENDS_COUNT,
    totalCount,
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}

export default friendsReducer;