import React from 'react';
import UserContext from '../userContext';

function Header(props) {
  return (
    <UserContext.Consumer>
      {userName => <header>Welcome, {userName}!</header>}
    </UserContext.Consumer>
  );
}

export default Header;
