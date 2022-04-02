import React from 'react'
import "./note.css"
import deleteIcon from "../../../assets/img/delete-icon-32.png"
import editIcon from "../../../assets/img/edit-24.png"


export default function Note(props) {
    const { noteInfo } = props;
    const deleteNote = () => { console.log('deleteing'); }
    const editNote = () => { console.log('Editing'); }
    // console.log(Object.Keys(noteInfo)[0]);
    return (
        <div className='note'>
            <h2>{Object.keys(noteInfo)[0]}</h2>
            <div className="actions">
                <a className='action-btn' href="" onClick={editNote} role="button"><img className='action-btn-icon' src={editIcon} alt="Edit icon" title='Edit Notes' /></a>
                <a className='action-btn' href="" onClick={deleteNote} role="button"><img className='action-btn-icon' src={deleteIcon} alt="delete icon" title='Delete Note' /></a>
            </div>
        </div>
    )
}
