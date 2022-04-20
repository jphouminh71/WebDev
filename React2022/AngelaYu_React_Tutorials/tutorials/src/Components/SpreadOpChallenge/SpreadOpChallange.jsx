import './styles.css'; 
import { useImperativeHandle, useState } from 'react';
import ToDoItem from './TodoItem';
import InputArea from './InputArea';

function SpreadOpChallenge() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        console.log(".>" + item); 
        setItems(prevItems => {
            return [...prevItems, item];
        });
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
            <InputArea 
                addItem={addItem}
            />
        <div>
            <ul>
                {items.map((todoItem, index) => (
                    <ToDoItem
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                    />
                ))}
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
