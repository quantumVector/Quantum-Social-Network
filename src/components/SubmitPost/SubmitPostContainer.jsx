import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateSubmitTextCreator } from '../../redux/postReducer';
import SubmitPost from './SubmitPost.jsx';
import Post from '../Post/Post.jsx';

const mapStateToProps = (state) => {
  const posts = state.posts.published.map( post => {
    return <Post profile={state.profilePage} post={post} />
  });

  return {
    profile: state.profilePage,
    currentTextMessage: state.posts.currentTextPost,
    publishedPosts: posts,
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