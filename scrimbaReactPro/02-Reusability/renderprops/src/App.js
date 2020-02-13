import React from 'react';
import Example from './components/Example';

const App = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <Example
        render={function(arr) {
          return <p>{`Is Bob Included? ${arr.includes('Bob')}`}</p>;
        }}
      />
    </div>
  );
};

export default App;
