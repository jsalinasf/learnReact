import React from 'react';
import Menu from './components/Menu';
import Favorite from './components/Favorite';

function App() {
  return (
    <div className='container'>
      <Menu />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
