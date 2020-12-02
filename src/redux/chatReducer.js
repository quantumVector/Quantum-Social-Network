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

  switch(action.type) {
    case 'ADD-MESSAGE':
      state.AshleyWilliams.messages.push(newMessage);
      state.currentTextMessage = '';
      return state;
    case 'UPDATE-CURRENT-TEXT-MESSAGE':
      state.currentTextMessage = action.text;
      return state;
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