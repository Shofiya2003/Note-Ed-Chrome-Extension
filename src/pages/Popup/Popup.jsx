import React from 'react';
import './Popup.css';
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
// import BottomNav from './popupNav/BottomNav';

const Popup = () => {
  return (
    <div className="App">
      <PopupNav />
      <Editor />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Popup;
