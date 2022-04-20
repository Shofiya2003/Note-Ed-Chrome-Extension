import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YtLogo from '../../../assets/img/youtube-96.png';
import './yt-home.css';
import SingleVideo from './SingleVideo';
import VideoNotes from './VideoNotes';
import Editor from '../editor/Editor';
import LoadingSpinner from '../LoadingSpinner';

const host = 'http://localhost:8000';
const siyasToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY';
const ramsToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhlcm1vaW5lIiwiZW1haWwiOiJoZXJtb2luZUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiNjI1OGMxMzQ4OWE2NzQyZTRjMTg5MzU4IiwiaWF0IjoxNjQ5OTg0MDI1fQ.hfBr644aHKXGAI2HDdgE7wUXwFX0hN8VbIiwM-UT2tc';
export default function YTHome() {
  const [allMyVideos, setAllMyVideos] = useState(null);
  // const [isVideoListOpen, setisVideoListOpen] = useState(true);
  const [isVideoNotesOpen, setisVideoNotesOpen] = useState(false);
  const [activeVideo, setactiveVideo] = useState(null);
  const [editorActive, seteditorActive] = useState(false);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const { authToken } = await chrome.storage.sync.get('authToken');

    axios
      .get(`${host}/api/v1/videos`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })
      .then((data) => {
        // console.log(data.data.videos)
        setAllMyVideos(data.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const whenVideoListOpen = () => {
    return (
      <>
        <div className="title">
          <img className="yt-logo" src={YtLogo} alt="youtube logo" />
          <h1>Your Videos</h1>
        </div>
        <div className="video-list">
          {allMyVideos ? (
            allMyVideos.map((video, index) => {
              return (
                <SingleVideo
                  key={video.video_id}
                  videoInfo={video}
                  setisVideoNotesOpen={setisVideoNotesOpen}
                  setactiveVideo={setactiveVideo}
                />
              );
            })
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </>
    );
  };
  const mainYTHomeFrame = () => {
    return (
      <>
        {isVideoNotesOpen ? (
          <VideoNotes
            activeVideo={activeVideo}
            setActiveNote={setActiveNote}
            seteditorActive={seteditorActive}
          />
        ) : (
          whenVideoListOpen()
        )}
      </>
    );
  };
  return (
    <div>
      {editorActive ? (
        <Editor
          activeNote={activeNote}
          url={activeVideo.video_url}
          videoname={activeVideo.video_name}
          seteditorActive={seteditorActive}
        />
      ) : (
        mainYTHomeFrame()
      )}
      {/* {editorActive ? <Editor activeNote={activeNote} seteditorActive={seteditorActive} videoname={activeVideo.video_name} currentTime={"time"} url={"a"} /> : <VideoNotes setActiveNote={setActiveNote} videoname={"activeVideo.video_name"} url={"activeVideo.video_url"} seteditorActive={seteditorActive} />} */}
    </div>
  );
}
