import React from 'react';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import Toggler from './components/Toggler';

function App() {
  return (
    <div className='container'>
      <Toggler
        defaultOnValue={true}
        render={({ on, toggle }) => {
          return <Menu on={on} toggle={toggle} />;
        }}
      />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
