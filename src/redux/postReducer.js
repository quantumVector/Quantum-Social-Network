import photo1Post1 from '../assets/postPhotos/photo1.jpg';
import photo2Post1 from '../assets/postPhotos/photo2.jpg';
import photo3Post1 from '../assets/postPhotos/photo3.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_SUBMIT_TEXT = 'UPDATE-SUBMIT-TEXT';

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

  currentTextPost: '',
};

const postReducer = (state = initialState, action) => {
  const newPost = {
    time: '16 minutes ago',
    text: state.currentTextPost,
    content: [photo1Post1, photo2Post1, photo3Post1],
    likes: '4',
    comments: '1',
    shared: '0',
  }

  switch (action.type) {
    case 'ADD-POST':
      state.published.unshift(newPost);
      state.currentTextPost = '';
      return state;
    case 'UPDATE-SUBMIT-TEXT':
      state.currentTextPost = action.text;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const updateSubmitTextCreator = (text) => {
  return {
    type: UPDATE_SUBMIT_TEXT,
    text,
  }
}

export default postReducer;