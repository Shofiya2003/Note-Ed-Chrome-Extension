import React from 'react'
import "./offlinePage.css"
import offlineImg from "../../assets/img/offline-96.png"

export default function OfflinePage() {
    const refreshHandle = () => {
        window.location.reload();
    }
    return (
        <div className='offline-page text-center'>
            <h1 className='hero-name bg-indigo-300'>Sasta Notion</h1>
            <div className="info">
                <img src={offlineImg} alt="offline" />
                <h2>Please go online to access your notes!</h2>
                <p className='refresh-btn' onClick={refreshHandle}>Refresh</p>
            </div>
        </div>
    )
}
