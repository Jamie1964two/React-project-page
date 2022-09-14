import React from "react";


export default function ProjectReactMeetups() {

    return (
    
        <div className="projElContainer learning-log-item">
            
            <div className="infoBox">
                <h2 className="h2margin">Nextjs Website</h2>
                <h4 className="hmargin">A website using Next's inbuilt routing, api and server-side rendering capabilities</h4>
                <div className="projImgBox">
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"next.png"} />
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"mongo.png"} />
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"vercel.svg"} />
                    {/* <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"css.png"} /> */}
                    
                </div>
            </div>
            
            <div className="infoBox">
                <img className="easyBankImg" alt="webpage preview" src={process.env.PUBLIC_URL+"projectImages/"+"react-meetups.png"} />

            <a className="" href="https://next-course-meetups.vercel.app/">
               <div className="trasparentLink">
                
               </div>
            
               </a>
            </div>
        </div>
    )
}
