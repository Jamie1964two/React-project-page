import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            
            <a className="emailLink" href="mailto:jamie1964two@hotmail.co.uk"> <FontAwesomeIcon icon={faEnvelope} className="emailIcon"/> Get in touch!</a>
   
        </div>
    )
}