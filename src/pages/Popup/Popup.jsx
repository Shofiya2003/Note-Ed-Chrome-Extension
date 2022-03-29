import React from 'react';
import './Popup.css';
import Editor from './editor/Editor';
import PopupNav from './popupNav/PopupNav';
import BottomNav from './popupNav/BottomNav';

const Popup = () => {
  return (
    <div className="App">
      <PopupNav />
      <h2>Note-ED Editor</h2>
      <div className="editor-div">
        <Editor />
      </div>
      <BottomNav />
    </div>
  );
};

export default Popup;
