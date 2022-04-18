import './styles.css'; 
import { useState } from 'react';

function SpreadOpChallenge() {
    const [input, setInput] = useState("");  
    const [items, setItems] = useState([]);

    function handleInput(e) { 
        const { value } = e.target;
        setInput(value);
    }

    function addItem() {
        const itemKey = items.length + 1;
        setItems([...items, {id: itemKey, value: input}])  // have to set it equal to a brand new array 
        setInput("");
    }

    function createlistElement(item) {
        return (
            <li key={item.id}> {item.value} </li> 
        );
    }

    return (
        <div className="container">
            <div className="heading">
            <h1>To-Do List</h1>
            </div>
            <div className="form">
            <input onChange={handleInput} value={input} type="text" />
            <button onClick={addItem}>
                <span>Add</span>
            </button>
            </div>
            <div>
            <ul>
                { items.map(createlistElement) }
            </ul>
            </div>
        </div>
        );
}

export default SpreadOpChallenge;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
