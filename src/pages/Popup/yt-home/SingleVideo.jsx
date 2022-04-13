import React from 'react'
import VideoNotes from './VideoNotes';

export default function SingleVideo(props) {
    const { videoInfo, setisVideoNotesOpen, setactiveVideo } = props;
    const onSingleVideoClick = () => {
        setactiveVideo(videoInfo)
        setisVideoNotesOpen(true)
    }

    console.log(videoInfo)
    return (
        <div onClick={onSingleVideoClick} className='single-video'>
            <p>{videoInfo.video_name}</p>
        </div>
    )
}
