import React, { useState } from 'react';

import './Popup.css';
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';

const Popup = () => {
    // const history = createMemoryHistory(); // Instead of createBrowserHistory();
    const [isLoggedin, setisLoggedin] = useState(true);
    return (
        <div className="App">
            <PopupNav />
            {/* {isLoggedin ? <Editor /> : <Login setisLoggedin={setisLoggedin} />} */}
            <Editor />
            {/* <Videohome /> */}

        </div>
    );
};

export default Popup;
