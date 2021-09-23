import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Your Text');

  const handleOnClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control my-3"
        onChange={handleOnChange}
        value={text}
        id="myBox"
        rows="7"
        onFocus={(e) => setText('')}
      />
      <button onClick={handleOnClick} className="btn btn-primary">
        Convert to Upppercase Format
      </button>
    </div>
  );
}
