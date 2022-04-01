import React from 'react'
import "./popupNavStyle.css"
import redirectIcon from "../../../assets/img/redirect-icon-32.png"
import deleteIcon from "../../../assets/img/delete-icon-32.png"

export default function PopupNav() {
    return (
        <div className='popup-nav'>
            <h1>Note-ED Editor</h1>
            <div className="nav">
                <a className='redirect-link2' href="https://linktr.ee/prathameshdukare" rel="noreferrer"><img src={deleteIcon} className="nav-icon" alt="clear notes icon" title='Clear the Notes' /></a>
                <a className='redirect-link' href="https://linktr.ee/prathameshdukare" target="_blank" rel="noreferrer"><img src={redirectIcon} className="nav-icon" alt="redirect icon" title='Go to Dashboard' /></a>
            </div>

        </div>
    )
}
