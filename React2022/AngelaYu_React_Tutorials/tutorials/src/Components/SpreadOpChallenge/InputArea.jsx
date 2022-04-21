import { useState } from 'react';

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(e) {
        var { value } = e.target;
        setInputText(value);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() => {props.addItem(inputText)}}>
                <span>Add</span>
            </button>
        </div>
    );
}
  
  export default InputArea;