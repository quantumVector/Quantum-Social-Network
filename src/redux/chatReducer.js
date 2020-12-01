import chatAshleyWilliams from './chat/AshleyWilliams';
import photoShepard from '../assets/profiles/Shepard-mini.png';

const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  AshleyWilliams: chatAshleyWilliams,
}

const chatReducer = (state = initialState, action) => {
  const newMessage = {
    from: 'me',
    photo: photoShepard,
    time: '12:00 PM',
    text: action.text,
  }

  switch(action.type) {
    case 'ADD-MESSAGE':
      state.AshleyWilliams.messages.push(newMessage);
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = (text) => {
  return {
    type: ADD_MESSAGE,
    text,
  }
}
export default chatReducer;