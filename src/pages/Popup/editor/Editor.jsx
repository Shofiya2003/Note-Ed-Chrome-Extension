import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfigObj from './editorConfig';
import "./editor.css";
import Saved from "./Saved";


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
            {/* Editor Component  */}
            <div id='editorjs'></div>
            <button className='save-text-btn' onClick={saveData}>Save Text</button>
        </>

    )
}
