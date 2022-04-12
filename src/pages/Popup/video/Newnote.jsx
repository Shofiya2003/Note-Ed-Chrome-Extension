import React from 'react'
import "./note.css"

export default function Newnote(props) {
    const { setActiveNote, seteditorActive } = props;
    const createNote = () => {
        console.log("creating new note...");
        setActiveNote(null);
        seteditorActive(true);
    }
    return (
        <div onClick={createNote} className='note new-note'>
            <h2>Create New Note</h2>
        </div>
    )
}
