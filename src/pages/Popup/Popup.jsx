import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
const [ctab, useCtab] = useState("");
const [count, setCount] = useState(0);
const [currentTS , setCurrentTS] = useState(null);
const [title, setTitle] = useState("");

  function logTabs(tabs) {
    useCtab(ctab => tabs[0].url);
    console.log(ctab);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  let querying = chrome.tabs.query({currentWindow: true, active: true});
  querying.then(logTabs, onError);

function recorder(e){
  e.preventDefault()

  let something = document.getElementsByClassName("ytp-progress-bar");
  let ts = something
  console.log(...ts);
  let name = document.getElementsByClassName("ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link")
  console.log(name);
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Note-Ed
        </p>
        
    <button onClick={recorder}  >Record event</button>
      </header>
    </div>
  );
};

export default Popup;
