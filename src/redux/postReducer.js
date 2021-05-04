import photo1Post1 from '../assets/postPhotos/photo1.jpg';
import photo2Post1 from '../assets/postPhotos/photo2.jpg';
import photo3Post1 from '../assets/postPhotos/photo3.jpg';

const ADD_POST = 'ADD-POST';

const initialState = {
  published: [
    {
      time: '6 hours ago',
      text: 'Individuals forged in the fire of service and battle.',
      content: [photo1Post1, photo2Post1, photo3Post1],
      likes: '87',
      comments: '20',
      shared: '13',
    },
    {
      time: '6 hours ago',
      text: 'Individuals forged in the fire of service and battle.',
      content: [photo1Post1, photo2Post1, photo3Post1],
      likes: '87',
      comments: '20',
      shared: '13',
    },
  ],
};

const postReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    published: [ ...state.published ]
  };

  switch (action.type) {
    case 'ADD-POST': {
      console.log(action.message)
      stateCopy.published = [...state.published];
      stateCopy.published.unshift({
        time: '16 minutes ago',
        text: action.postMessage,
        content: [photo1Post1, photo2Post1, photo3Post1],
        likes: '4',
        comments: '1',
        shared: '0',
      });
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (postMessage) => {
  return {
    type: ADD_POST,
    postMessage
  }
}

export default postReducer;