import React, { useEffect, useState } from 'react'
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';

export default function HomeFrame(props) {
    const { seteditorActive, editorActive } = props;

    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [time, setTime] = useState();
    const [currentTime, setCurrentTime] = useState();

    // helper functions 
    const formatTitle = (videoname) => {
        if (videoname.charAt(0) === '(') {
            let pos = 0;
            while (videoname.charAt(pos) !== ')') {
                pos++;
            }
            videoname = videoname.substring(pos + 1);
        }
        if (videoname.charAt(0) === " ") {
            // console.log("space contains");
            videoname = videoname.substring(1);
        }
        setName(videoname);
    }
    const storeTimestamp = () => {
        console.log("store timestamp called");
        const time = document.body.getElementsByClassName('ytp-time-current');
        const timestamp = time[0].innerText;
        chrome.storage.sync.set({ timestamp });
        console.log("stored timestamp in storage");
    }

    const getTimeStamps = async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        formatTitle(tab.title);
        setUrl(tab.url);

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: storeTimestamp
        });
        chrome.storage.sync.get('timestamp', (data) => {
            console.log(data, "stored timestamp");
            setTime(data.timestamp);
        })
    }


    useEffect(() => {
        getTimeStamps();
        chrome.storage.sync.get('timestamp', (data) => {
            console.log(data);
        })
    }, []);

    useEffect(() => {
        const newTime = chrome.storage.sync.get('timestamp', data => {
            console.log(data.timestamp + "timestamp");
            setCurrentTime(data.timestamp);
        });
    }, [time])

    // useEffect(() => {
    //     console.log(name);
    // }, [name])

    return (
        <>
            {/* {console.log("rendering homeframe")} */}
            {editorActive ? <Editor seteditorActive={seteditorActive} videoname={name} timestamp={currentTime} url={url} /> : <Videohome videoname={name} url={url} seteditorActive={seteditorActive} />}
        </>
    )
}
