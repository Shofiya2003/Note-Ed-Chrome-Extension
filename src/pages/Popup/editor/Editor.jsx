import EditorJS from '@editorjs/editorjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './editor.css';
import tools from './commonTools';

const API_URL = 'http://localhost:8000';
const siyasToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY';
const ramsToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbSIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MjU1M2U0MzgzMWEyYjE4N2IyZWEyZDciLCJpYXQiOjE2NDk3NTM2Njd9.jcOqw_X7Ve7KyL3SZcfVWQN4xDfYeOFE4KSbep1P3f0';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhlcm1vaW5lIiwiZW1haWwiOiJoZXJtb2luZUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiNjI1OGMxMzQ4OWE2NzQyZTRjMTg5MzU4IiwiaWF0IjoxNjQ5OTg0MDI1fQ.hfBr644aHKXGAI2HDdgE7wUXwFX0hN8VbIiwM-UT2tc';
export default function Editor(props) {
  const { seteditorActive, activeNote, videoname, url, currentTime } = props;

  let editor;
  const launchEditor = () => {
    editor = new EditorJS({
      holder: 'editorjs',
      autofocus: true,
      placeholder: 'write your notes here...',
      readOnly: false,
      tools: tools,
      data: activeNote
        ? JSON.parse(activeNote[Object.keys(activeNote)[0]])
        : null,
    });
  };
  // blocks[0] blocks
  const saveData = () => {
    editor
      .save()
      .then(async (outputData) => {
        console.log(outputData);
        // setData(outputData);
        let timestamp = activeNote ? Object.keys(activeNote)[0] : currentTime;
        let note = JSON.stringify(outputData);
        const { authToken } = await chrome.storage.sync.get('authToken');
        axios
          .post(
            `${API_URL}/api/v1/notes/timestamp/create`,
            {
              video_url: url,
              videoname,
              timestamp,
              content: note,
              foldername: 'default',
            },
            {
              headers: {
                authorization: `Bearer ${authToken}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
            return false;
          });
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  };

  useEffect(() => {
    launchEditor();
  });
  return (
    <>
      <div className="video-nav">
        <div className="video-info">
          <h2>{videoname}</h2>
        </div>
        <div className="buttons">
          <div className="childs">
            <a
              className="back-btn"
              href="#"
              onClick={() => {
                seteditorActive(false);
              }}
            >
              Back
            </a>
            <a className="save-btn" href="#" onClick={saveData}>
              Save
            </a>
          </div>
          <h2>{`Timestamp : ${
            activeNote ? Object.keys(activeNote)[0] : currentTime
          }`}</h2>
        </div>
      </div>
      <div id="editorjs"></div>
    </>
  );
}
