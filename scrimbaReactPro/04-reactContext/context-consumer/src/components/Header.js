import React from 'react';
import ThemeContext from '../themeContext';

function Header(props) {
  return (
    <ThemeContext.Consumer>
      {currentTheme => (
        <header className={`${currentTheme}-Theme`}>
          <h2>{currentTheme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
