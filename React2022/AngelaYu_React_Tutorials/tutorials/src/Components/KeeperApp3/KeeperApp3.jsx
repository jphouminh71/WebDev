import './styles.css'
import { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function KeeperApp3() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
      console.log(newNote);
      setNotes((prev) => {return [...prev, newNote]});
    }

    // TODO: Filter notes by some attribute 
    function deleteNoteById(_id) {
      console.log("delete note called" + _id);
      var filteredNotes = notes.filter( (note, index) => {
        return index !== _id
      }); 
      setNotes(filteredNotes);
    }

    return (
        <div>
          <Header />
          <CreateArea addNote={addNote} />
            { 
              notes.map( (note,index) => {  
                return <Note
                  deleteNote={deleteNoteById}
                  key={index}
                  id={index}  
                  title={note.title}
                  content={note.content} />
              })
            }
          <Footer />
        </div>
    );
}

export default KeeperApp3;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/