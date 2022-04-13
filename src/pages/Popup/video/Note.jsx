import React from 'react'
import "./note.css"
import deleteIcon from "../../../assets/img/delete-icon-32.png"
import editIcon from "../../../assets/img/edit-24.png"
import axios from 'axios';

const API_URL = "https://Backend-1.prathameshdukare.repl.co"
const siyasToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
const ramsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0"


export default function Note(props) {
    const { noteInfo, url, allNotes, setAllNotes, setActiveNote, seteditorActive } = props;
    const deleteNote = (e) => {
        e.preventDefault();
        console.log('deleting');
        const video_id = url.split("watch?v=")[1]

        axios.post(`${API_URL}/api/v1/notes/timestamp/delete`, { timestamp: Object.keys(noteInfo)[0], video_id }, {
            headers: {
                "authorization": `Bearer ${ramsToken}`
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                return false;
            })

        // setting all notes 
        let deletedTimeStamp = Object.keys(noteInfo)[0];
        let newNotes = allNotes.filter((note) => {
            let noteTimeStamp = Object.keys(note)[0];
            if (noteTimeStamp === deletedTimeStamp) {
                return false
            }
            else { return true }
        });

        console.log(newNotes);
        setAllNotes(newNotes)
        console.log('deleted');
    }
    const editNote = (e) => {
        e.preventDefault();
        console.log('editing');
    }
    const openNote = () => {
        console.log("opening note...");
        setActiveNote(noteInfo);
        seteditorActive(true);

    }
    console.log(url);
    return (
        <div className='note'>
            <h2 className='timestamp' title='Open Note' onClick={openNote}>{Object.keys(noteInfo)[0]}</h2>
            <div className="actions">
                <a className='action-btn' href="" onClick={editNote} role="button"><img className='action-btn-icon' src={editIcon} alt="Edit icon" title='Edit Notes' /></a>
                <a className='action-btn' href="" onClick={deleteNote} role="button"><img className='action-btn-icon' src={deleteIcon} alt="delete icon" title='Delete Note' /></a>
            </div>
        </div>
    )
}
