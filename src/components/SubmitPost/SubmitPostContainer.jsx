import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/postReducer';
import SubmitPost from './SubmitPost.jsx';
import Post from '../Post/Post.jsx';

const mapStateToProps = (state) => {
  const posts = state.posts.published.map(post => {
    return <Post profile={state.profilePage} post={post} key={post.id} />
  });

  return {
    profile: state.profilePage,
    publishedPosts: posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postMessage) => {
      dispatch(addPostActionCreator(postMessage));
    },
  }
}

const SubmitPostContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitPost);

export default SubmitPostContainer;