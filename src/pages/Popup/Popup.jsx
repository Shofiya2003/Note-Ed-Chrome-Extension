import React from 'react';
import './Popup.css';
import Editor from './editor/Editor';
import PopupNav from './editor/popupNav/PopupNav';

const Popup = () => {
  return (
    <div className="App">
      <PopupNav />
      <h2>Note-ED Editor</h2>
      <div className="editor-div">
        <Editor />
      </div>
    </div>
  );
};

export default Popup;
