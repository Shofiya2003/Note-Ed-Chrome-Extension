import React, { useState } from 'react';

import './Popup.css';
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';


const Popup = () => {

    const [isLoggedin, setisLoggedin] = useState(false);
    chrome.storage.sync.get(['loggedInStatus'], function (result) {
        console.log('loggedInStatus is ' + result.loggedInStatus);
        if (result.loggedInStatus) {
            setisLoggedin(true);
        }
    });
    const [editorActive, seteditorActive] = useState(false);
    return (
        <div className="App">
            <PopupNav />
            {isLoggedin ? <Videohome seteditorActive={seteditorActive} /> : <Login setisLoggedin={setisLoggedin} />}
            {/* {editorActive ? <Editor seteditorActive={seteditorActive} /> : <Videohome seteditorActive={seteditorActive} />} */}
            {/* <Editor /> */}
            {/* <Videohome seteditorActive={seteditorActive} /> */}

        </div>
    );
};

export default Popup;
