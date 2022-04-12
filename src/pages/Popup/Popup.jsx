import React, { useState } from 'react';
import './Popup.css';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';
import HomeFrame from './HomeFrame';
import OfflinePage from './OfflinePage';

const Popup = () => {
    const [isLoggedin, setisLoggedin] = useState(false);
    const [editorActive, seteditorActive] = useState(false);

    chrome.storage.sync.get(['loggedInStatus'], function (result) {
        if (result.loggedInStatus) {
            setisLoggedin(true);
        }
    });

    return (
        <div className="App">
            {navigator.onLine ? <>
                <PopupNav />
                {isLoggedin ? <HomeFrame seteditorActive={seteditorActive} editorActive={editorActive} /> : <Login setisLoggedin={setisLoggedin} />}
            </> : <OfflinePage />}
        </div>
    );
};

export default Popup;