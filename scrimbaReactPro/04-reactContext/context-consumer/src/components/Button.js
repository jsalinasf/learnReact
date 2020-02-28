import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={`${props.currentTheme}-Theme`}>Switch Theme</button>
  );
}

Button.propTypes = {
  currentTheme: PropTypes.oneOf(['light', 'dark'])
};

Button.defaultProps = {
  currentTheme: 'dark'
};

export default Button;
