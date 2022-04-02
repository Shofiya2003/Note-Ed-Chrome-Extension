import React from 'react'
import Login from '../login/Login'
import Note from './Note'
import Newnote from './Newnote';

export default function Videohome() {
    const videoTitle = "React server components | Mehul Mohan";
    const allNotes = [
        { "00:00:23": "notes" },
        { "00:01:23": "notes" },
        { "00:04:08": "notes" }
    ]

    return (
        <div className='video-home'>
            <h2 className='video-title'>{videoTitle}</h2>
            {allNotes.map((singleNote) => {
                let singleNoteKey = Object.keys(singleNote)[0]
                return <Note key={singleNoteKey} noteInfo={singleNote} />
            })}
            <Newnote />
        </div>
    )
}
