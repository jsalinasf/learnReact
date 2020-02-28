import React, { Component } from 'react';
import ThemeContext from '../themeContext';

class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const currentTheme = this.context;
    return (
      <div>
        <header className={`${currentTheme}-Theme`}>
          <h2>{currentTheme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      </div>
    );
  }
}

export default Header;
