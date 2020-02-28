import React, { Component } from 'react';
import ThemeContext from '../themeContext';

class Button extends Component {
  render() {
    const currentTheme = this.context;
    return (
      <div>
        <button className={`${currentTheme}-Theme`}>Switch Theme</button>
      </div>
    );
  }
}

Button.contextType = ThemeContext;

export default Button;
