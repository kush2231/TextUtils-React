function About(props) {

    const myStyle = {
      color: props.mode === "dark" ? "white" : "rgb(57 122 163)",
      backgroundColor: props.mode === "dark" ? "rgb(57 122 163)" : "white",
      // borderColor: props.mode === "dark" ? "white" : "",

      // border:'1px solid white'
    };
    
     
    return (
      <div className='container' style={myStyle}>
        <h2
          className='my-3'
          style={{ color: props.mode === "dark" ? "white" : "rgb(57 122 163)" }}
        >
          About Us{" "}
        </h2>
        <div className='accordion' id='accordionExample' style={myStyle}>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                s
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                style={myStyle}
              >
                <strong>Analyze your text </strong>
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle}>
                Site provides you many services like word count , time to read
                articles , converting to Uppercase , LowerCase , handling
                Spaces, Copying the Text ...
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
                style={myStyle}
              >
                <strong> Free to Use</strong>
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle}>
                Yea, You can use it freely !
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
                style={myStyle}
              >
                <strong> Browser Compatibility </strong>
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle}>
                Firefox Google Chrome,
                Microsoft Edge , Apple Safari, Opera  Brave, VivaldiDuckDuckGo ..
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About