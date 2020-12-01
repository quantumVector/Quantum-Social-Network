import photo1Post1 from '../assets/postPhotos/photo1.jpg';
import photo2Post1 from '../assets/postPhotos/photo2.jpg';
import photo3Post1 from '../assets/postPhotos/photo3.jpg';

const ADD_POST = 'ADD-POST';

const postReducer = (state, action) => {
  const newPost = {
    time: '16 minutes ago',
    text: action.text,
    content: [photo1Post1, photo2Post1, photo3Post1],
    likes: '4',
    comments: '1',
    shared: '0',
  }

  switch (action.type) {
    case 'ADD-POST':
      state.unshift(newPost);
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text,
  }
}

export default postReducer;