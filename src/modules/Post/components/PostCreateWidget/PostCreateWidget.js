import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={'form-content'}>
          <h2 className={'form-title'}>Create New Post</h2>
          <input placeholder="Author name" className={'form-field'} ref="name" />
          <input placeholder="Post title" className={'form-field'} ref="title" />
          <textarea placeholder="Post content" className={'form-field'} ref="content" />
          <a className={'post-submit-button'} href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired
};

export default PostCreateWidget;
