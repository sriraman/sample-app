import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={'single-post'}>
      <h3 className={'post-title'}>
        {props.post.title}
      </h3>
      <p className={'author-name'}>by {props.post.name}</p>
      <p className={'post-desc'}>{props.post.content}</p>
      <p className={'post-action'}><a href="#" onClick={props.onDelete}>Delete Post</a></p>
      <hr className={'divider'} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
