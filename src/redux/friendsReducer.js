import testPhoto from '../assets/profiles/Garrus-mini.png';

const UNFRIEND = 'UNFRIEND';
const SET_FRIENDS = 'SET-FRIENDS';

const initialState = [
  {
    id: '1',
    name: 'Tester 1',
    photo: testPhoto,
    status: 'want pizza...',
  },
  {
    id: '2',
    name: 'Tester 2',
    photo: testPhoto,
    status: 'In touch with the reptilians, they are my friends',
  },
  {
    id: '3',
    name: 'Tester 3',
    photo: testPhoto,
    status: 'Sad 😔',
  },
  {
    id: '4',
    name: 'Tester 4',
    photo: testPhoto,
    status: 'Funniest day of the year, what do you think?',
  },
];

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UNFRIEND':
      return state.map(user => {
        if (user.id === action.userId) {
          const index = state.indexOf(user);

          if (index > -1) return [...state.splice(index, 1)];

          return state;
        }
      });
    case 'SET-FRIENDS':
      return [...state, action.friends];
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