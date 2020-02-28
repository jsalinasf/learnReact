import React from 'react';
import ThemeContext from './themeContext';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {currentTheme => <Button currentTheme={currentTheme} />}
      </ThemeContext.Consumer>

      <Button currentTheme={'light'} />

      {/* using defaultProps */}
      <Button currentTheme={'dark'} />
    </div>
  );
}

export default App;
