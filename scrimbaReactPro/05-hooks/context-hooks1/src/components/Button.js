import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

function Button(props) {
  // We are destructuring just to show how it works
  // I may find this pattern out there
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={`${theme}-theme`} onClick={toggleTheme}>
      Switch Theme
    </button>
  );
}

export default Button;
