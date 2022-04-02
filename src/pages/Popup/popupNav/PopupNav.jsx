import React from 'react'
import "./popupNavStyle.css"
import redirectIcon from "../../../assets/img/redirect-icon-32.png"
import deleteIcon from "../../../assets/img/delete-icon-32.png"

export default function PopupNav() {
    return (
        <div className='popup-nav'>
            <h1>Note-ED</h1>
            <div className="nav">
                <a className='redirect-link2' href="#gf" rel="noreferrer"><img src={deleteIcon} className="action-btn-icon" alt="clear notes icon" title='Clear Notes' /></a>
                <a className='redirect-link' href="https://linktr.ee/prathameshdukare" target="_blank" rel="noreferrer"><img src={redirectIcon} className="action-btn-icon" alt="redirect icon" title='Go to Dashboard' /></a>
            </div>

        </div>
    )
}
