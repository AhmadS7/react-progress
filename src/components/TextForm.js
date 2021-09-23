import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Your Text');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const intoTitleCase = () => {
    let newText = text.split(' ').map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(' '));
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3" onChange={handleOnChange} value={text} id="myBox" rows="7" onFocus={(e) => setText('')} />
        </div>
        <button onClick={handleUpClick} className="btn btn-primary my-2 mx-2">
          Convert to Upppercase Format
        </button>
        <button onClick={handleLowClick} className="btn btn-primary my-2 mx-2">
          Convert to Lowercase Format
        </button>
        <button onClick={(e) => setText('')} className="btn btn-primary my-2 mx-2">
          Cleart Text
        </button>
        <button onClick={intoTitleCase} className="btn btn-primary my-2 mx-2">
          Cpitalize Text
        </button>
      </div>
      <div className="container my-3 mx-2">
        <h1 className="my-4">Text Summary</h1>
        <p>
          {' '}
          It's has {text.split(' ').length - 1} words and and a total {text.length} characters{' '}
        </p>

        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
