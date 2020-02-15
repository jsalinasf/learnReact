import React, { useState, useEffect } from 'react';

const Picture = props => {
  const divStyle = {
    display: 'inline-block',
    margin: '10px',
    border: '1px solid red'
  };

  return (
    <div style={divStyle}>
      <p>{props.alt}</p>
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
  }, [props.id, props.pictureSrc]);

  return (
    <div>
      <button onClick={() => props.setCurrentPic(pictureId)}>{label}</button>
    </div>
  );
};

const Caption = props => <p>{props.text}</p>;

const ChangeCaption = props => {
  return (
    <input
      type='text'
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

const App = () => {
  const [pictures] = useState([
    { id: 1, src: 'http://via.placeholder.com/200x100' },
    { id: 2, src: 'http://via.placeholder.com/400x200' },
    { id: 3, src: 'http://via.placeholder.com/200x100' }
  ]);
  const [captions, setCaptions] = useState(['image 1', 'image 2', 'image 3']);
  const [currentPic, setCurrentPic] = useState(null);

  const handleChange = event => {
    event.persist();
    setCaptions(captions => {
      let newArray = captions.map((item, index) => {
        if (parseInt(event.target.name) === index) {
          return event.target.value;
        }
        return item;
      });
      return newArray;
    });
  };

  return (
    <div>
      {pictures.map((picture, i) => {
        return (
          <Picture key={picture.id} src={picture.src} alt=''>
            <Caption text={captions[i]} />
            <Button
              pictureSrc={picture.src}
              setCurrentPic={setCurrentPic}
              id={picture.id}
            />
            <ChangeCaption
              name={picture.id - 1}
              onChange={handleChange}
              value={captions[i]}
            />
          </Picture>
        );
      })}

      <p>Current Picture: {currentPic}</p>
    </div>
  );
};

export default App;
