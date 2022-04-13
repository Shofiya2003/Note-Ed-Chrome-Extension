import React, { useEffect, useState } from 'react';
import './Popup.css';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';
import HomeFrame from './HomeFrame';
import OfflinePage from './OfflinePage';
import GotoYoutube from './GotoYoutube';

const Popup = () => {
    const [isLoggedin, setisLoggedin] = useState(false);
    const [editorActive, seteditorActive] = useState(false);
    const [isYtTab, setIsYtTab] = useState();

    chrome.storage.sync.get(['loggedInStatus'], function (result) {
        if (result.loggedInStatus) {
            setisLoggedin(true);
        }
    });

    useEffect(() => {
        const fun = async () => {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            console.log(tab)

            if (tab.url.startsWith("https://www.youtube.com")) {
                setIsYtTab(true)
            } else {
                setIsYtTab(false)
            }
        }
        fun()
    }, [])

    const MainPopup = () => {
        return <>
            {isYtTab ? <>

                <PopupNav />
                {isLoggedin ? <HomeFrame seteditorActive={seteditorActive} editorActive={editorActive} /> : <Login setisLoggedin={setisLoggedin} />}
            </> : <GotoYoutube />}
        </>
    }
    return (
        <div className="App">
            {navigator.onLine ? MainPopup() : <OfflinePage />}
        </div>
    );
};

export default Popup;