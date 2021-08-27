import chatAshleyWilliams from './chat/AshleyWilliams';
import photoShepard from '../assets/profiles/Shepard-mini.png';

const ADD_MESSAGE = 'quantum_network/chat/ADD_MESSAGE';

const initialState = {
  AshleyWilliams: chatAshleyWilliams,
}

const chatReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    AshleyWilliams: {
      ...state.AshleyWilliams,
      messages: [ ...state.AshleyWilliams.messages ]
    },
  }

  switch (action.type) {
    case 'quantum_network/chat/ADD_MESSAGE':
      stateCopy.AshleyWilliams.messages.push({
        from: 'me',
        photo: photoShepard,
        time: '12:00 PM',
        text: action.message,
      });
      return stateCopy;
    default:
      return state;
  }
}

export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export default chatReducer;