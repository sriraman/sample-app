import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../../components/PostListItem/PostListItem.css';

import { fetchPost } from '../../PostActions';

import { getPost } from '../../PostReducer';

export function PostDetailPage(props) {
  return (
    <div>
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.title}</h3>
        <p className={styles['author-name']}>by {props.post.name}</p>
        <p className={styles['post-desc']}>{props.post.content}</p>
      </div>
    </div>
  );
}

PostDetailPage.need = [params => {
  return fetchPost(params.id);
}];

function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.id),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
