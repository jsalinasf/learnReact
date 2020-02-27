import React, { Component } from 'react';
import UserContext from '../userContext';

class Header extends Component {
  static contextType = UserContext;
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
