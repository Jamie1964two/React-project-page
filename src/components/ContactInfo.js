import React from 'react';

export default function ContactInfo() {
    return (
        <div>
        <a className="" href="https://www.linkedin.com/in/jamie-moreland-666a20243/">
            <img className="contactImg" alt="linkedin logo" src={process.env.PUBLIC_URL+"languageLogos/"+"linkedin.png"} />
        </a>
        <a className="" href="https://github.com/Jamie1964two">
            <img className="contactImg" alt="github logo" src={process.env.PUBLIC_URL+"languageLogos/"+"github.png"} />
        </a>
        </div>
    )
}