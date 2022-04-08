import React, { useState,useEffect } from 'react';
import Editor from './editor/Editor';
import './Popup.css';
import PopupNav from './popupNav/PopupNav';
import Videohome from "./video/Videohome";


const Popup = () => {
    //
    // const history = createMemoryHistory(); // Instead of createBrowserHistory();
    const [isLoggedin, setisLoggedin] = useState(true);
    const [editorActive, seteditorActive] = useState(false);

    const [name,setName]=useState();
    const [time,setTime]=useState();
    const [url,setUrl]=useState();
    const [currentTime,setCurrentTime]=useState();

    const getTimeStamps=async ()=>{
        let [tab]=await chrome.tabs.query({active:true,currentWindow:true});

       
        formatTitle(tab.title);
        
        setUrl(tab.url);
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        
        function:storeTimestamp
    });
    chrome.storage.sync.get('timestamp',(data)=>{
        console.log(data);
        setTime(data.timestamp);
    })
    }

    const formatTitle=(videoname)=>{
        if(videoname.charAt(0)==='('){
            let pos=0;
            while(videoname.charAt(pos)!==')'){
                pos++;
            }
            videoname=videoname.substring(pos+1);
            
        }
        setName(videoname);
    }
    useEffect(async ()=>{
        
        await getTimeStamps();

        chrome.storage.sync.get('timestamp',(data)=>{
            console.log(data);
        })


    },[]);


    useEffect(()=>{
        const newTime=chrome.storage.sync.get('timestamp',data=>{
            console.log(data.timestamp+"noe");
            setCurrentTime(data.timestamp);
        });

    },[time])

    useEffect(()=>{
        console.log(name);
    },[name])

    const storeTimestamp=()=>{
        console.log("hereiam");
        const time=document.body.getElementsByClassName('ytp-time-current');
        const timestamp=time[0].innerText;
        
        chrome.storage.sync.set({timestamp});
       
        
    }

    return (
        <div className="App">
            <PopupNav />
            {/* {isLoggedin ? <Editor /> : <Login setisLoggedin={setisLoggedin} />} */}
            {editorActive ? <Editor seteditorActive={seteditorActive} videoname={name} timestamp={currentTime} url={url} /> : <Videohome videoname={name} timestamp={currentTime} url={url} seteditorActive={seteditorActive} />}
            {/* <Editor /> */}
            {/* <Videohome seteditorActive={seteditorActive} /> */}

        </div>
    );
};

export default Popup;
