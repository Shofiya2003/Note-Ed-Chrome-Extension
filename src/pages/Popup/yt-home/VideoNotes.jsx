import React, { useState } from 'react';
import Note from '../video/Note';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';

// globle variables
const host = 'http://localhost:8000';

export default function VideoNotes({
  activeVideo,
  setActiveNote,
  seteditorActive,
}) {
  const [allNotes, setAllNotes] = useState(null);

  console.log(activeVideo);

  useState(async () => {
    const { authToken } = await chrome.storage.sync.get('authToken');

    axios
      .get(`${host}/api/v1/video/${activeVideo.video_id}`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })
      .then((data) => {
        console.log(data.data.data);
        setAllNotes(data.data.data);
      });
  }, []);
  return (
    <div className="vidoe-notes">
      <h2 className="video-title">{activeVideo.video_name}</h2>
      <h2>Your Notes</h2>
      {allNotes ? (
        allNotes.map((singleNote) => {
          let singleNoteKey = Object.keys(singleNote)[0];
          return (
            <Note
              noteInfo={singleNote}
              url={activeVideo.video_url}
              allNotes={allNotes}
              setActiveNote={setActiveNote}
              key={singleNoteKey}
              setAllNotes={setAllNotes}
              seteditorActive={seteditorActive}
            />
          );
        })
      ) : (
        <LoadingSpinner />
      )}
      {allNotes && allNotes.length === 0 ? (
        <h3 className="no-notes">No Notes</h3>
      ) : null}
    </div>
  );
}
