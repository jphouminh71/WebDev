//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from 'react'


function createNote(props) {
    return (
        <Note
            key = {props.key}
            title = {props.title}
            content = {props.content}
        />
    )
}

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1> 
            <p>{props.content}</p>
        </div> 
    )
}


export default Note; 
export {createNote}; 