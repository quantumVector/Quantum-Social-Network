import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateSubmitTextCreator } from '../../redux/postReducer';
import SubmitPost from './SubmitPost.jsx';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    currentTextMessage: state.posts.currentTextPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateSubmitText: (text) => {
      dispatch(updateSubmitTextCreator(text));
    },
  }
}

const SubmitPostContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitPost);

export default SubmitPostContainer;