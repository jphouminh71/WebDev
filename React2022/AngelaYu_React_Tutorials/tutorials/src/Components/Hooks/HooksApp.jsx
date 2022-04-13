import './styles.css';
import { useState } from 'react';

function HooksApp() {

    // useState is a hook that is tells React to re-render when something happens to it. 
    // this is also quick because React only re-renders items that this instead a full page. 
    const [count, setCount] = useState(0);


    // destructuring example, don't think its best practice for a method to return more than one thing to begin with. 
    const [red, green, blue] = [9,132,227]


    function increase() {
        count = count + 1;
        console.log("I got clicked", count);
    }
    return (
        <div className="container">
            <h1>{count}</h1>

            {/* Can pass any kind of method in setCount() */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>     
    )
}

export default HooksApp; 