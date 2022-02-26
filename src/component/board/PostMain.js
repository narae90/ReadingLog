import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';

const PostMain = props => {
  return (
    <>
      <h1 align="center">게시판</h1>
      <PostList />
    </>
  )
}

export default PostMain;