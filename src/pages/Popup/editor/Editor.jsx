import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfigObj from './editorConfig';
import "./editor.css";


export default function Editor() {
    const [Data, setData] = useState({});
    let editor;

    const launchEditor = () => {
        editor = new EditorJS(EditorConfigObj);
    }

    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            setData(outputData);
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
                    <h2>{"Video title here..."}</h2>
                    <h2>{"Timestamp : 1:05 "}</h2>
                </div>
                <a className='save-btn' href="#" onClick={saveData}>Save</a>

            </div>

            <div id='editorjs'></div>

        </>

    )
}
