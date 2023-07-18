import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!", "success");
  }
  
  
  const handleitClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase!", "success");
  }
  const handleCopy = () => {
    let ctext = document.getElementById("typehere");
    ctext.select();
    navigator.clipboard.writeText(ctext.value);  // copythe text in clipboard 
    props.showAlert("Copied to Clipboard!", "success");

  }
  const handleclearClick = () => {
    // console.log("uppercase was clicked "+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");

  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  const handleExtraspaaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));   //
    props.showAlert("Handled ExtraSpaces!", "success");

  }

  const [text, setText] = useState('');
  // text="new text"  wrong way
  // setText("new text") correct way  
  // const l = text.split(" ").length;
  // console.log(100);  // two times rendering because of strict mode 
  let nstring = text.trim();
    let newtext = nstring.split(/[ ]+/);
    let fstring=(newtext.join(" "));   //
  
  let w = 0;
  if (fstring.length === 0) {
    w = 0;
  } else{
    w = fstring.split(" ").length;
    // console.log(fstring.length);
}
  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'grey'}}>
      
      
 <h1>{props.it}</h1>
  <div className="mb-3" >
   
          <textarea className="form-control" value={text} onChange={handleOnChange} id="typehere" rows="8" style={{
            background: props.mode === 'dark' ? 'grey' : 'white'
            , color: props.mode === 'dark' ? 'white' : 'black'
          }} ></textarea>
  </div>
  <button  className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
  <button  className="btn btn-primary mx-2" onClick={handleitClick}>convert to lowercase</button>
  <button  className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
  <button  className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
  <button  className="btn btn-primary mx-2 " onClick={handleExtraspaaces}>HandleSpaces</button>
  </div>
    
      <div className="container my-3"  style={{color: props.mode==='dark'?'white':'grey'}} >
        <h1> your text summary </h1>
        
        <p> <b>{w}  words  and {text.length} characters </b>  </p>
       
        <p>  { 
        // ( text.length===0||text[text.length-1]===' '  )? 0.008 * (text.split(" ").length-1):0.008 * (text.split(" ").length)} min read </p>
          0.008 * w} min read </p>
        
        <h2>Preview</h2>
        <p>{text.length === 0 ? "enter something to preview" : text}</p>
      </div>
      </>
 
  )
}
