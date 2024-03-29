import './styles.css';
import { useState } from 'react';

function EventHandingApp() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleClick() {
        setHeadingText("Submitted!");
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
          <h1>{headingText}</h1>
          <input type="text" placeholder="What's your name?" />
          <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={ {backgroundColor : isMouseOver ? "black" : "white"} }>Submit</button>
        </div>
      );
}

export default EventHandingApp; 