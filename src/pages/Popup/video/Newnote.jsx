import React from 'react'
import "./note.css"

export default function Newnote(props) {
    const { seteditorActive } = props;
    const createNote = () => {
        console.log("creating new note...");
        seteditorActive(true);
    }
    return (
        <div onClick={createNote} className='note new-note'>
            <h2>Create New Note</h2>
        </div>
    )
}
