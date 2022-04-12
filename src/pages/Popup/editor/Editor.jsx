import EditorJS from '@editorjs/editorjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditorConfigObj from './editorConfig';
import "./editor.css";
import tools from "./commonTools"

const API_URL = "https://Backend-1.prathameshdukare.repl.co"
const siyasToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
const ramsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0"

export default function Editor(props) {
    const { seteditorActive, activeNote, videoname, url, timestamp } = props;
    // const [Data, setData] = useState({});
    let editor;
    console.log(JSON.parse(activeNote[Object.keys(activeNote)[0]]), "activeNote");
    const launchEditor = () => {
        editor = new EditorJS({
            holder: 'editorjs',
            autofocus: true,
            placeholder: "write your notes here...",
            readOnly: false,
            tools: tools,
            data: JSON.parse(activeNote[Object.keys(activeNote)[0]])
        });
    }
    // blocks[0] blocks
    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            // setData(outputData);

            let note = JSON.stringify(outputData);
            axios.post(`${API_URL}/api/v1/notes/timestamp/create`, { video_url: url, videoname, timestamp, content: note, foldername: "default" }, {
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

        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }

    useEffect(() => {
        launchEditor()
    })
    return (
        <>
            <div className="video-nav">
                <div className="video-info">
                    <h2>{videoname}</h2>
                </div>
                <div className="buttons">
                    <div className='childs'>
                        <a className='back-btn' href="#" onClick={() => { seteditorActive(false) }}>Back</a>
                        <a className='save-btn' href="#" onClick={saveData}>Save</a>
                    </div>
                    <h2>{`Timestamp : ${timestamp} `}</h2>
                </div>
            </div>
            <div id='editorjs'></div>
        </>
    )
}
