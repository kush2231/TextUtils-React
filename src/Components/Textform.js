import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!", "success");
  };

  const handleitClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text); // copythe text in clipboard
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleclearClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleExtraspaaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" ")); //
    props.showAlert("Handled ExtraSpaces!", "success");
  };

  const [text, setText] = useState("");
  // text="new text"  wrong way
  // setText("new text") correct way
  // const l = text.split(" ").length;
  // console.log(100);  // two times rendering because of strict mode
  // let nstring = text.trim();
  //   let newtext = nstring.split(/[ ]+/);
  //   let fstring=(newtext.join(" "));   //

  // let w = 0;
  // if (fstring.length === 0) {
  //   w = 0;
  // } else{
  //   w = fstring.split(" ").length;
  // console.log(fstring.length);
  // }
  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === "dark" ? "white" : "#2f3b5a" }}
      >
        <h1 className='mb-2'>{props.it}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='typehere'
            rows='8'
            style={{
              background: props.mode === "dark" ? "#2f3b5a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-1'
          onClick={handleUpClick}
        >
          convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-1'
          onClick={handleitClick}
        >
          convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-1'
          onClick={handleclearClick}
        >
          clear text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-1'
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-1 '
          onClick={handleExtraspaaces}
        >
          HandleSpaces
        </button>
      </div>

      <div
        className='container my-3'
        style={{ color: props.mode === "dark" ? "white" : "#2f3b5a" }}
      >
        <h1> Your Text Summary </h1>

        <p>
          {" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters{" "}
          </b>{" "}
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length} 
           Min read
        </p>

        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
