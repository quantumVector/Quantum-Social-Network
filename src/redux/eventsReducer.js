import photoEvent from '../assets/event.jpg';

const initialState = {
  label: 'Travel to the Citadel for supplies.',
  photo: photoEvent,
  fullTime: '01st Jan, 2186 07:00AM',
  day: '01',
  month: 'Jan',
};

const eventsReducer = (state = initialState, action) => {
  return state;
}

export default eventsReducer;