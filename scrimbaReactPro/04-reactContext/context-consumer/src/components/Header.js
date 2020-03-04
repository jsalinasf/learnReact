import React from 'react';
import { ThemeContextConsumer } from '../themeContext';

function Header(props) {
  return (
    <ThemeContextConsumer>
      {currentTheme => (
        <header className={`${currentTheme}-Theme`}>
          <h2>{currentTheme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
