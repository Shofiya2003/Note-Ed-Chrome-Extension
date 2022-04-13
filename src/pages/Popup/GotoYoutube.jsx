import React from 'react'
import "./goto-yt.css"
import youtubeLogo from "../../assets/img/youtube-96.png"

export default function GotoYoutube() {
    return (
        <div className='goto-yt'>

            <h1 className='hero-name bg-indigo-300'>Sasta Notion</h1>
            <div className="info">
                <img src={youtubeLogo} alt="youtube" />
                <h2>Currently we are only supporting note taking on Youtube</h2>
                <a className='go-yt-btn' target="_blank" rel="noreferrer" href="https://youtube.com">Head over to Youtube</a>
            </div>

        </div>

    )
}
