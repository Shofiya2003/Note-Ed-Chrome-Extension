import React from 'react'
import Login from '../login/Login'
import Note from './Note'
import Newnote from './Newnote';

export default function Videohome(props) {
    const { seteditorActive } = props;
    const videoTitle = "React server components | Mehul Mohan";
    const allNotes = [
        { "00:00:23": "notes" },
        { "00:01:23": "notes" },
        { "00:04:08": "notes" }
    ]

    const allNotes2 = {
        "00:00:23": "notes",
        "00:01:23": "notes",
        "00:04:08": "notes",
    }

    let allNewNotes = Object.keys(allNotes2).map((item) => {
        let tempObj = {}
        tempObj[item] = allNotes2[item]
        return tempObj
    })
    console.log(allNewNotes, "new arr")

    return (
        <div className='video-home'>
            <h2 className='video-title'>{videoTitle}</h2>
            {allNewNotes.map((singleNote) => {
                let singleNoteKey = Object.keys(singleNote)[0]
                return <Note key={singleNoteKey} noteInfo={singleNote} seteditorActive={seteditorActive} />
            })}
            <Newnote />
        </div>
    )
}
