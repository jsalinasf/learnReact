import React from 'react';
import { UserContextConsumer } from '../userContext';

function Header(props) {
  return (
    <UserContextConsumer>
      {context => (
        <header>
          <h2>Welcome, {context.username}!</h2>
        </header>
      )}
    </UserContextConsumer>
  );
}

export default Header;
