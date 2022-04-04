import React, { useState } from 'react';

import './Popup.css';
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';

const Popup = () => {
    // const history = createMemoryHistory(); // Instead of createBrowserHistory();
    const [isLoggedin, setisLoggedin] = useState(true);
    const [editorActive, seteditorActive] = useState(false);
    return (
        <div className="App">
            <PopupNav />
            {/* {isLoggedin ? <Editor /> : <Login setisLoggedin={setisLoggedin} />} */}
            {editorActive ? <Editor seteditorActive={seteditorActive} /> : <Videohome seteditorActive={seteditorActive} />}
            {/* <Editor /> */}
            {/* <Videohome seteditorActive={seteditorActive} /> */}

        </div>
    );
};

export default Popup;
