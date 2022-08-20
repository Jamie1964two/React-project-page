import '../index.css';


function Header1() {

    return (
        <header style={styles.header} >
        <h1 style={styles.title} className="header-title">Jamie Moreland</h1>
        <h2 style={styles.subline} className="header-subline">- Portfolio Projects -</h2>
        </header>
    )
}

export default Header1;

const styles = {

    title: {
        "position" : "relative",
        "font-size" : "5em",
        "margin" : "0.5em",
        "margin-bottom": "0.8em",
        "font-family": "'Sigmar One', cursive",
        "color": "white",  
        "z-index": "1",
        "line-height": "80%"     

    },
    subline: {
        "position" : "relative",
        "font-size" : "2em",
        "margin-top":"-1.5em",
        "font-family": "'Bubblegum Sans', cursive",
        "z-index": "-1" 
    },


}


