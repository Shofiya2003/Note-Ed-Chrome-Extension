import React, { useEffect, useState } from 'react'
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';
import YTHome from './yt-home/YTHome';

export default function HomeFrame(props) {
    const { seteditorActive, editorActive } = props;
    const [activeNote, setActiveNote] = useState();
    const [isYtHome, setisYtHome] = useState(null);


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
        if (tab.favIconUrl === "https://www.youtube.com/s/desktop/dd6131a8/img/favicon_32x32.png") {
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
    }

    const mainFrame = () => {
        return <>
            {editorActive ? <Editor activeNote={activeNote} seteditorActive={seteditorActive} videoname={name} currentTime={currentTime} url={url} /> : <Videohome setActiveNote={setActiveNote} videoname={name} url={url} seteditorActive={seteditorActive} />}
        </>
    }

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0].url === "https://www.youtube.com/") {
                setisYtHome(true);
                // dont-fetch
            } else if (!(tabs[0].url === "https://www.youtube.com/")) {
                setisYtHome(false);
                // now fetch 
                getTimeStamps();
                chrome.storage.sync.get('timestamp', (data) => {
                    console.log(data);
                })
            }
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
            {isYtHome ? <YTHome /> : mainFrame()}
        </>
    )
}
