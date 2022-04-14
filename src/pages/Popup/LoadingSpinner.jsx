import React from 'react'
import "./loading-spinner.css"

export default function LoadingSpinner() {
    return (
        <div className='loading-spinner'>
            <div className="lds-dual-ring"></div>
        </div>
    )
}
