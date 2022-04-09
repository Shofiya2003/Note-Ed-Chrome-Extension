import React from 'react'
import Videohome from "./video/Videohome"
import Editor from './editor/Editor';

export default function HomeFrame(props) {
    const { seteditorActive, editorActive } = props;
    return (
        <>
            {editorActive ? <Editor seteditorActive={seteditorActive} /> : <Videohome seteditorActive={seteditorActive} />}
        </>
    )
}
