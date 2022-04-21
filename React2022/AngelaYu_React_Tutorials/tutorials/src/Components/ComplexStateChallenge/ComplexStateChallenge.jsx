import './styles.css';
import { useDebugValue, useState } from 'react';

function ComplexStateChallenge() {
    const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
    });

    function handleInputChange(e) {
        const { value, name } = e.target;
        setContact((prev) => {
            return {
                ...prev, 
                // have to wrap the [name] like this to get the value to use as a key? 
                [name] : value   
            }
        });
    }

    return (
    <div className="container">
        <h1>
        Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
        <input onChange={handleInputChange} name="fName" placeholder="First Name" />
        <input onChange={handleInputChange} name="lName" placeholder="Last Name" />
        <input onChange={handleInputChange} name="email" placeholder="Email" />
        <button>Submit</button>
        </form>
    </div>
    );
}

export default ComplexStateChallenge;

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events
