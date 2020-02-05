import React from 'react';
import { withFavoriteNumber } from './components/withFavoriteNumber';

const App = props => {
  return (
    <div className='container'>
      <h1>High Order Components</h1>
      <p>
        A function that takes a component as its first argument and returns a
        new component that wraps the given component, providing extra
        capabilities to it.
      </p>
      <br />
      <div>{props.favoriteNumber}</div>
    </div>
  );
};

// export default App;
export default withFavoriteNumber(App);
