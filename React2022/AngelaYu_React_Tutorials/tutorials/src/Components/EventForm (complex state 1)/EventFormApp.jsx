import './styles.css';
import { useState } from 'react';

function EventFormApp() {

    const [fullName, setFullName] = useState({
      fName: "", 
      lName: ""
    });

    function handleChange(e) {
      //const newValue = e.target.value;
      //const inputName = e.target.name;
      const { value, name } = e.target;

      setFullName((prev) => {
        if (name === "lName-input") {
          return {
            fName : prev.fName, 
            lName : value
          }
        } else if (name === "fName-input") {
          return {
            fName : value,
            lName : prev.lName
          }
        }
      })
    }

    return (
        <div className="container">
          <form> 
            <h1> Hello {fullName.fName} {fullName.lName} </h1>
            <input 
              name="fName-input"
              type="text" 
              placeholder="Firstname" 
              onChange={handleChange}
              value={fullName.fName}
              />
              <input 
              name="lName-input"
              type="text" 
              placeholder="Lastname" 
              onChange={handleChange}
              value={fullName.lName}
              />
            <button
              type="submit"
              >
               Submit
            </button>
          </form> 
        </div>
      );
}

export default EventFormApp; 