import './styles.css';
import { useState } from 'react'; 
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

// create the stateful hooks 
// link the callback to App.jsx for the add method to the button element 
function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function updateCurrentNoteAttributes(event) {
        var { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.addNote(note); 
        event.preventDefault(); 
    }

    return (
        <div>
            <form className='create-note'>
                <input 
                    onChange={updateCurrentNoteAttributes}
                    name="title" 
                    placeholder="Title" 
                    value={note._title} />
                <textarea 
                    onChange={updateCurrentNoteAttributes}
                    name="content"
                    placeholder="Take a note..."
                    rows="3" 
                    value={note._content}/>
                <Fab onClick={submitNote}>
                    <AddIcon />  
                </Fab>
            </form>
        </div>
    );
}
  
export default CreateArea;