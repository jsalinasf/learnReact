import React from 'react';
import { ThemeContextConsumer } from '../themeContext';

function Button(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <button
          className={`${context.theme}-Theme`}
          onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
