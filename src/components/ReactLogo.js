//import React from 'react';

export default function ReactLogo() {
    return (
        <div className="logo-rotate" style={styles.container}>
            <div style={styles.logoalign} >
            <div style={{...styles.rings, ...styles.ringOne}} className="logo-ringOne"></div>
            <div style={{...styles.rings, ...styles.ringTwo}} className="logo-ringTwo"></div>
            <div style={{...styles.rings, ...styles.ringThree}} className="logo-ringThree"></div>
            <div style={styles.circle} className="logo-circle"></div>
            </div>
        </div>

    )
 }

 const ovalheight = 0.75;
 const ovalwidth = 0.25;

 const styles = {
    container : {
        "position" : "absolute",
        "top" : "50px",
        "height": `${ovalheight*100}vh`,
        "width": `${ovalheight*100}vh`,
        // "border": "1px solid white",
        "display": "flex",
        "align-items": "center",
        "justify-content" : "center",
    },
    logoalign : {
        "position" : "absolute",
    },
    rings : {
        "height": `${ovalheight*100}vh`,
        "width": `${ovalwidth*100}vh`,
        "border": "3.5vh solid transparent",
        "border-radius": "50%",
        "position" : "absolute",
        "top": "0",
        "left": "0"
    },
    ringOne : {
        "transform": "rotate(120deg)",
        "top": `${-41}vh`,
        "left": "-16vh"
    },
    ringTwo : {
        "transform": "rotate(240deg)",
        "top": `${-41}vh`,
        "left": "-16vh"
    },
    ringThree : {
        "transform": "rotate(360deg)",
        "top": `${-41}vh`,
        "left": "-16vh"
    },
    circle : {
        "position" : "absolute",
        "top" : `${-7}vh`,
        "left" : "-7vh",
        "height": "14vh",
        "width": "14vh",
        "border-radius": "50%",
        "background-color":"transparent",
    }
 }