import EditorJS from '@editorjs/editorjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./editor.css";

import EditorConfigObj from './editorConfig';

const API_URL = "https://Backend-1.prathameshdukare.repl.co"

export default function Editor(props) {
    const { seteditorActive, videoname, url, timestamp } = props;
    const [Data, setData] = useState({});
    let editor;

    const launchEditor = () => {
        editor = new EditorJS(EditorConfigObj);
    }
    // blocks[0] blocks
    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            setData(outputData);
            let note = JSON.stringify(outputData);
            axios.post(`${API_URL}/api/v1/notes/timestamp/create`, { video_url: url, videoname, timestamp, content: note, foldername: "default" }, {
                headers: {
                    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY"
                }
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {

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
                    <h2>{`Timestamp : ${timestamp} `}</h2>
                </div>
                <a className='save-btn' href="#" onClick={saveData}>Save</a>
                <a className='back-btn' href="#" onClick={() => { seteditorActive(false) }}>Back</a>

            </div>

            <div id='editorjs'></div>

        </>

    )
}
