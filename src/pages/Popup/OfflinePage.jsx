import React from 'react'
import "./offlinePage.css"

export default function OfflinePage() {
    const refreshHandle = () => {
        window.location.reload();
    }
    return (
        <div className='offline-page text-center'>
            <h1 className='hero-name bg-indigo-300'>Sasta Notion</h1>
            <div className="info">
                <h2>Please go online to access your notes!</h2>
                <button onClick={refreshHandle}>Refresh</button>
            </div>
        </div>
    )
}
