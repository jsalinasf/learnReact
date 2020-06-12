import React, { useState } from 'react';
const TipsContext = React.createContext();

function TipsContextProvider(props) {
  const [tip, setTip] = useState('');

  function selectTip() {
    setTip(TIPS[Math.floor(Math.random() * Math.floor(TIPS.length))]);
  }

  return (
    <TipsContext.Provider value={{ tip, selectTip }}>
      {props.children}
    </TipsContext.Provider>
  );
}

export const TIPS = [
  'Words with two or less characters are ignored',
  'Empty spaces are not counted',
  'Empty spaces at the beginning are not counted',
  'Empty spaces at the end are not counted',
  'Type as soon as you click the start button',
];

export { TipsContextProvider, TipsContext };
