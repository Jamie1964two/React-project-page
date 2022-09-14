import React from "react";


export default function ProjectEasyBank() {

    return (
    
        <div className="projElContainer learning-log-item">
            
            <div className="infoBox">
                <h2 className="h2margin">Responsive Webpage</h2>
                <h4 className="hmargin">A Webpage built using Sass to be fully responsive</h4>
                <div className="projImgBox">
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"sass.jpg"} />
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"html.png"} />
                    <img className="projImg projImg-fixedwidth reactNativeImg" alt="react-native logo" src={process.env.PUBLIC_URL+"languageLogos/"+"css.png"} />
                    
                </div>
            </div>
            
            <div className="infoBox">
                <img className="easyBankImg" alt="webpage preview" src={process.env.PUBLIC_URL+"projectImages/"+"easybank.jpg"} />

            <a className="" href="https://easybank-website-psi.vercel.app/">
               <div className="trasparentLink">
                
               </div>
            
               </a>
            </div>
        </div>
    )
}
