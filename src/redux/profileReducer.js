import photoShepard from '../assets/profiles/Shepard-mini.png';

const initialState = {
  name: 'John Shepard',
  photo: photoShepard,
};

const profileReducer = (state = initialState, action) => {
  return state;
}

export default profileReducer;