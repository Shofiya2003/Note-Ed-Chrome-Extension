import EditorJS from '@editorjs/editorjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./editor.css";
import EditorConfigObj from './editorConfig';

const API_URL = 'http://localhost:8000'

export default function Editor(props) {
    const { seteditorActive } = props;
    const [Data, setData] = useState({});
    let editor;

    const launchEditor = () => {
        editor = new EditorJS(EditorConfigObj);
    }
// blocks[0] blocks
    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
           // console.log(outputData[blocks]); blocks[0].data blocks[0].data.html
            setData(outputData);
            console.log(outputData.blocks[0].type);
            console.log(outputData.blocks[0].data.text);
            let note = outputData.blocks[0].data.text;
            axios.post(`${API_URL}/api/v1/notes/timestamp/create`, { video_url:"String",  video_name:"String",   timestamp:"string",    content: note,    foldername:"default" },{
                headers: {
                    "authorization": ""
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
                    <h2>{"Video title here..."}</h2>
                    <h2>{"Timestamp : 1:05 "}</h2>
                </div>
                <a className='save-btn' href="#" onClick={saveData}>Save</a>
                <a className='back-btn' href="#" onClick={() => { seteditorActive(false) }}>Back</a>

            </div>

            <div id='editorjs'></div>

        </>

    )
}
