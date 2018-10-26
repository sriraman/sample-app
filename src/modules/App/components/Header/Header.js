import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './header.css';

export class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={'header'}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
