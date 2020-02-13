import React from 'react';
import Example from './components/Example';

const App = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <Example
        render={function(number) {
          return <h1>{number}</h1>;
        }}
      />
    </div>
  );
};

export default App;
