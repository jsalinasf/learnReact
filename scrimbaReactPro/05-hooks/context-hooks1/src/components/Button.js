import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

function Button(props) {
  const context = useContext(ThemeContext);
  return (
    <button className={`${context.theme}-theme`} onClick={context.toggleTheme}>
      Switch Theme
    </button>
  );
}

export default Button;
