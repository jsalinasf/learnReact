import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('python');
  return (
    <div>
      <p>Im learning {language}</p>
      <button onClick={() => setLanguage('JavaScript')}>Change Language</button>
    </div>
  );
};

export default App;
