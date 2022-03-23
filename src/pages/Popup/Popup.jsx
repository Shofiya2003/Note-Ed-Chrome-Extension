import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {

  function recordTime(){
    const bar=document.body.getElementsByClassName('time-first');
    let time = bar.innerText;
    console.log(time);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Note-Ed
        </p>
        <button onClick={recordTime()}>Record Time</button>
      </header>
    </div>
  );
};

export default Popup;
