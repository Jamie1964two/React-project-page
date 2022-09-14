import React from 'react';

export default function CourseElement(props) {

    return (
/*         <div className="elementBox">
            <img alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+props.courseData[0].Logo} />
            <h2>{props.courseData[0].Date}</h2>
            <a href={props.courseData[0].Link}>link</a>
        </div> */

        <div className="elementBox">
            <img alt="coding language logo" src={process.env.PUBLIC_URL+"languageLogos/"+props.courseData.Logo} />
                <h4 className="date">{props.courseData.Date}</h4>
            <div className="provider">
                <h5>{props.courseData.Provider}</h5>
                {props.courseData.Link && <a href={props.courseData.Link}>Course link</a> }
                {props.courseData.Project && <a href={props.courseData.Project}>Project link</a> }
                {props.courseData.Certificate && <a href={props.courseData.Certificate}>Certificate</a> }
            </div>
        </div>
    )
}