import chatAshleyWilliams from './chat/AshleyWilliams';
import photoShepard from '../assets/profiles/Shepard-mini.png';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CURRENT_TEXT_MESSAGE = 'UPDATE-CURRENT-TEXT-MESSAGE';

const initialState = {
  currentTextMessage: '',
  AshleyWilliams: chatAshleyWilliams,
}

const chatReducer = (state = initialState, action) => {
  const newMessage = {
    from: 'me',
    photo: photoShepard,
    time: '12:00 PM',
    text: state.currentTextMessage,
  }

  const stateCopy = {
    ...state,
    AshleyWilliams: {
      ...state.AshleyWilliams,
      messages: [ ...state.AshleyWilliams.messages ]
    },
  }

  switch (action.type) {
    case 'ADD-MESSAGE':
      stateCopy.AshleyWilliams.messages.push(newMessage);
      stateCopy.currentTextMessage = '';
      return stateCopy;
    case 'UPDATE-CURRENT-TEXT-MESSAGE':
      stateCopy.currentTextMessage = action.text;
      return stateCopy;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
}

export const updateCurrentTextMessageCreator = (text) => {
  return {
    type: UPDATE_CURRENT_TEXT_MESSAGE,
    text,
  }
}

export default chatReducer;