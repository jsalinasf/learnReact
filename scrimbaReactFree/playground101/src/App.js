import React, { useState, useEffect } from 'react';

const Picture = props => {
  const divStyle = {
    display: 'inline-block',
    margin: '10px',
    border: '1px solid red'
  };

  return (
    <div style={divStyle}>
      <img src={props.src} alt={props.alt}></img>
      {props.children}
    </div>
  );
};

const Button = props => {
  const [pictureId, setPictureId] = useState(null);
  const [label, setLabel] = useState(null);

  useEffect(() => {
    if (props.pictureSrc.includes('200x100')) {
      setLabel('Small');
      setPictureId(props.id);
    } else {
      setLabel('Large');
      setPictureId(props.id);
    }
  }, []);

  return (
    <div>
      <button onClick={() => props.setCurrentPic(pictureId)}>{label}</button>
    </div>
  );
};

const App = () => {
  const [pictures] = useState([
    { id: 1, src: 'http://via.placeholder.com/200x100' },
    { id: 2, src: 'http://via.placeholder.com/400x200' },
    { id: 3, src: 'http://via.placeholder.com/200x100' }
  ]);
  const [currentPic, setCurrentPic] = useState(null);

  return (
    <div>
      {pictures.map(picture => {
        return (
          <Picture key={picture.id} src={picture.src} alt={'A Placeholder'}>
            <Button
              pictureSrc={picture.src}
              setCurrentPic={setCurrentPic}
              id={picture.id}
            />
          </Picture>
        );
      })}

      <p>Current Picture: {currentPic}</p>
    </div>
  );
};

export default App;
