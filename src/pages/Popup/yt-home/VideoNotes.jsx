import React, { useState } from 'react'
import Note from '../video/Note'
import axios from 'axios';

// globle variables 
const host = "https://Backend-1.prathameshdukare.repl.co"
const siyasToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
const ramsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0"


export default function VideoNotes({ activeVideo, setActiveNote, seteditorActive }) {

    const [allNotes, setallNotes] = useState([]);

    console.log(activeVideo)

    useState(() => {
        axios.get(`${host}/api/v1/video/${activeVideo.video_id}`, {
            headers: {
                "authorization": `Bearer ${ramsToken}`
            }
        }).then(data => {
            console.log(data.data.data)
            setallNotes(data.data.data)
        })
    }, [])
    return (
        <div className='vidoe-notes'>
            <h2 className='video-title'>{activeVideo.video_name}</h2>
            <h2>Your Notes</h2>
            {allNotes && allNotes.map((singleNote) => {
                let singleNoteKey = Object.keys(singleNote)[0]
                return <Note noteInfo={singleNote} url={activeVideo.video_url} allNotes={allNotes} setActiveNote={setActiveNote} key={singleNoteKey} setallNotes={setallNotes} seteditorActive={seteditorActive} />
            })}
        </div>
    )
}
