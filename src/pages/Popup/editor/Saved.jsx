import React, { useEffect} from 'react'
import EditorJS from '@editorjs/editorjs';
import tools from './commonTools';

export default function Saved(props) {
  
    const showSaved = ()=>{
      new EditorJS({
        holderId : 'loadHere',
        autofocus: true,
        data: props.data,
        tools:tools
    }); 
    }
   
    useEffect(()=>{
      console.log(props.data);
        showSaved();
    })
        
  return (
      <>
    <div id="loadHere"></div>
      </>
    
  )
}
