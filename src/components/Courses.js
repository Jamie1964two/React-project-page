import React from 'react';
import './courses.css';
import CourseElement from './CourseElement';
import {courseData} from './courseData';

export default function Courses() {

    const elementsArray = courseData.map( (entry,i) => {
       
        return (
            <CourseElement courseData={entry} key={i} />
        )
    })

    

    return (
        <div className="container">
            <h1>Learning Log</h1>
            
            {elementsArray}
        </div>
    )
}