import React from 'react';
import { ThemeContextConsumer } from '../themeContext';

function Button() {
  return (
    <ThemeContextConsumer>
      {context => (
        <button
          className={`${context.theme}-theme`}
          onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>

    // <button className='dark-theme'>Switch Theme</button>
  );
}

export default Button;
