import React, { useState } from 'react';

import './Popup.css';
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
import Login from './login/Login';
// import Login from "./login/Login";
// import Register from "./login/Register";
// import BottomNav from './popupNav/BottomNav';

const Popup = () => {
    // const history = createMemoryHistory(); // Instead of createBrowserHistory();
    const [isLoggedin, setisLoggedin] = useState(false);
    return (
        <div className="App">

            <PopupNav />
            {isLoggedin ? <Editor /> : <Login setisLoggedin={setisLoggedin} />}

            {/* <Editor /> */}

            {/* <Login /> */}


        </div>
    );
};

export default Popup;
