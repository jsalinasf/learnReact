import React, { Component } from 'react';
import ThemeContext from '../themeContext';

class Button extends Component {
  static contextType = ThemeContext;
  render() {
    const currentTheme = this.context;
    return <button className={`${currentTheme}-Theme`}>Switch Theme</button>;
  }
}

export default Button;
