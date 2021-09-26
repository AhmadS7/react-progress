import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to UpperCase', 'success');
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to LowerCase', 'success');
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // const intoTitleCase = () => {
  //   let newText = text.split(' ').map((currentValue) => {
  //     let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
  //     return newText;
  //   });
  //   setText(newText.join(' '));
  // };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied Successfully', 'success');
  };

  const handleSpace = () => {
    // eslint-disable-next-line no-empty-character-class
    let netText = text.split(/[ ]+/);
    setText(netText.join(' '));
    props.showAlert('Extra Spaces Deleted', 'warning');
  };

  return (
    <>
      <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{ backgroundColor: props.Mode === 'dark' ? 'grey' : 'white', color: props.Mode === 'dark' ? 'white' : '#042743' }}
            className="form-control my-3"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="7"
            onFocus={(e) => setText('')}
          />
        </div>
        <button onClick={handleUpClick} className="btn btn-primary my-2 mx-2">
          Convert to Upppercase Format
        </button>
        <button onClick={handleLowClick} className="btn btn-primary my-2 mx-2">
          Convert to Lowercase Format
        </button>
        <button onClick={handleCopy} className="btn btn-primary my-2 mx-2">
          Copy The Text
        </button>
        <button onClick={handleSpace} className="btn btn-primary my-2 mx-2">
          Clear Extra Spaces
        </button>
        <button onClick={(e) => setText('')} className="btn btn-primary my-2 mx-2">
          Cleart Text
        </button>
        {/* <button onClick={intoTitleCase} className="btn btn-primary my-2 mx-2">
          Cpitalize Text
        </button> */}
      </div>
      <div className="container my-3 mx-2" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="my-4">Text Summary</h1>
        <p>
          {' '}
          It's has {text.split(' ').length - 1} words and and a total {text.length} characters{' '}
        </p>

        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Enter Your Text to Preview'}</p>
      </div>
    </>
  );
}
