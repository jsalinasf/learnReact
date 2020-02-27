import React, { Component } from 'react';
import ThemeContext from '../ThemeContext';

class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const currentUser = this.context;
    return (
      <div>
        <header>
          <p>Welcome, {currentUser}!</p>
        </header>
      </div>
    );
  }
}

export default Header;
