import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {currentTheme => <Button currentTheme={currentTheme} />}
      </ThemeContextConsumer>
    </div>
  );
}

export default App;
