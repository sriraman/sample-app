import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.id}
            onDelete={() => props.handleDeletePost(post.id)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
