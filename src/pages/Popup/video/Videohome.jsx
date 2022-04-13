import React, { useEffect, useState } from 'react'
import Note from './Note'
import Newnote from './Newnote';
import axios from 'axios';

// globle variables 
const host = "https://Backend-1.prathameshdukare.repl.co"
const siyasToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
const ramsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0"



export default function Videohome(props) {
    const { setActiveNote, videoname, url, seteditorActive } = props;
    const [allNotes, setAllNotes] = useState();
    let [title, setTitle] = useState();

    const fetchNotes = async (video_id) => {
        // console.log(url, "received in fetchNotes");
        // const video_id = url.split("watch?v=")[1]
        axios.get(`${host}/api/v1/video/${video_id}`, {
            headers: {
                "authorization": `Bearer ${ramsToken}`
            }
        }).then(data => {
            console.log(data.data.message);
            if (data.data.message === "not found") {
                setAllNotes([])
            } else {
                setAllNotes(data.data.data);
            }
        }).catch(err => {
            console.log(err);
        })

    }

    // API deprecated ❤
    // useEffect(() => {
    //     console.log(videoname);
    //     videoname && fetchNotes(); 
    // }, [videoname])

    useEffect(() => {
        if (url) {
            let video_id = url.split("watch?v=")[1]
            if (video_id.includes("&t=")) {
                video_id = video_id.split("&t=")[0]
            }
            console.log("Formated video id", video_id);
            fetchNotes(video_id);
        }
    }, [url])
    return (
        <div className='video-home'>
            <h2 className='video-title'>{videoname}</h2>
            {allNotes && allNotes.map((singleNote) => {
                let singleNoteKey = Object.keys(singleNote)[0]
                return <Note setActiveNote={setActiveNote} key={singleNoteKey} noteInfo={singleNote} url={url} setAllNotes={setAllNotes} allNotes={allNotes} seteditorActive={seteditorActive} />
            })}
            <Newnote setActiveNote={setActiveNote} seteditorActive={seteditorActive} />
        </div>
    )
}
