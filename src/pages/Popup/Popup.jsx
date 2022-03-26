import React from 'react';
import './Popup.css';
import Editor from './editor/Editor';

const Popup = () => {
  return (
    <div className="App">
      <h2>Note-ED Editor</h2>
      <div className="editor-div">
        <Editor />
      </div>
    </div>
  );
};

export default Popup;
